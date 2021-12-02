const { uuid } = require('uuidv4')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const TokenStorage = require('./tokens.js')
const port = 3000

// Simple user 'database'
const Users = {
  'test-user': 'test-password'
}

// Use body-parser middleware to extract url encoded (i.e. form submission) data
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Test that the server is alive and responding to requests
 */
app.get('/', (req, res) => {
  res.json({status: 'success'})
})

/**
 * Render the login page
 */
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/frontend/login.html')
})

/**
 * Authenticate a user using submitted credentials, generate a token, and redirect
 * them to their original client redirect URL
 */
app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const clientRedirectUrl = req.body.clientRedirectUrl

  if (username in Users && Users[username] == password) {
    const token = uuid()
    if (TokenStorage.save(token)) {
        // The token has now been stored, so redirect the user back to their client application
        res.redirect(clientRedirectUrl + '?token=' + token)
    } else {
        // If there was an error saving a token, the server isn't functioning properly
        res.status(500)
    }
  } else {
    // Incorrect username or password
    res.status(401).send('Username or password incorrect.')
  }
})

/**
 * Verifies the presence of a submitted token in token storage
 */
app.get('/validate/:potentialToken', (req, res) => {
    console.debug('valid? ', TokenStorage.validate(req.params.potentialToken))
    if (TokenStorage.validate(req.params.potentialToken)) {
        res.json({'status': 'valid'})
    } else {
        res.json({'status': 'invalid'})
    }
})

// Don't bind the server to a network port when unit testing
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Auth app listening at http://localhost:${port}`)
    })
}

module.exports = app
