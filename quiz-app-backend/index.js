const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
cors()

const app = express()

const quizzes = require('./data.json')

app.use(cors())

app.get('/api/quizzes', (req, res) => {
  res.json(quizzes)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
