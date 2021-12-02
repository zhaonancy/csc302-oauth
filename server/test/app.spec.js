const request = require('supertest')
const app = require('../app.js')
const { uuid } = require('uuidv4')
const TokenStorage = require('../tokens.js')

/**
 * Simple test suite to verify auth app API functionality
 */
describe('Auth app test suite', () => {
    // Hey, you never know...
    test('sanity check', () => {
        expect(true).toEqual(true)
    })

    test('responds to a basic request', () => {
        return request(app).get('/').expect(200)
    })

    test('serves login page', () => {
        return request(app).get('/login').expect(200)
    })

    test('valid user can authenticate, is redirected, and token is saved', async () => {
        const tokensBeforeRequest = TokenStorage.count()

        // Send request to get token
        const response = await request(app).post('/login')
            .send('username=test-user&password=test-password&clientRedirectUrl=https://example.com')
            .expect(302)

        // Note that the request function is await'd, otherwise this wouldn't work
        const tokensAfterRequest = TokenStorage.count()
        expect(tokensAfterRequest).toEqual(tokensBeforeRequest + 1)
    })

    test('invalid user is not authenticated', () => {
        // Valid username, invalid password
        request(app).post('/login')
            .send('username=test-user&password=invalid&clientRedirectUrl=https://example.com')
            .expect(401, 'Username or password incorrect.')

        // Invalid username, valid password
        request(app).post('/login')
            .send('username=invalid&password=test-password&clientRedirectUrl=https://example.com')
            .expect(401, 'Username or password incorrect.')
    })

    test('valid token is validated', () => {
        const validToken = uuid()
        TokenStorage.save(validToken)
        request(app).get('/validate/' + validToken).expect(200, {status: 'valid'})
    })

    test('invalid token is not validated', () => {
        // Generate a real UUID, so that this test would not be inadvertently broken by adding e.g. regex validation
        const invalidToken = uuid()
        request(app).get('/validate/' + invalidToken).expect(200, {status: 'invalid'})
    })
})
