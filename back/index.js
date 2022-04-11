const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3030
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users/register', db.createUser)
app.post('/users/login', db.logIn)
app.post('/dice', (req, res) => {

  res.json(req);
  
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})