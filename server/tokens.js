const fs = require('fs')

// This would definitely be better as an env variable, but keeping it simple for now
const FILENAME = 'tokens.txt'

/**
 * Abstracts storage of authentication tokens
 */
class TokenStorage {
    /**
     * Saves a token to persistent storage
     * @return never
     */
    static save(newToken) {
        try {
            fs.appendFileSync(FILENAME, newToken + '\n')
        } catch (error) {
            console.error('Error saving new token:', error)
            return false
        }

        // Save was successful
        return true
    }

    /**
     * Determines whether or not a token exists in persistent storage
     * @return bool
     */
    static validate(potentialToken) {
        try {
            const fileContents = fs.readFileSync(FILENAME, 'utf8')
            const lines = fileContents.split('\n')
            return lines.includes(potentialToken)
        } catch (error) {
            console.error('Error validating token: ', error)
            return false
        }
    }

    /**
     * Count the number of tokens in storage
     * @return int
     */
    static count() {
        try {
            const fileContents = fs.readFileSync(FILENAME, 'utf8')
            return fileContents.split('\n').length
        } catch (error) {
            console.error('Error retrieving tokens: ', error)
            return -1
        }
    }
}

module.exports = TokenStorage
