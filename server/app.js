const express = require('express')
const app = express()
const port = 3000

const Users = {
  'test-user': 'test-password'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (username in Users && Users[username] == password) {
    const token = generateToken()
    res.send({ token: token })
  } else {
    res.status(401).send()
  }
})

app.get('/verify', (req, res) => {
  res.status(200).send()
})

app.listen(port, () => {
  console.log(`Auth app listening at http://localhost:${port}`)
})

function generateToken() {

}
