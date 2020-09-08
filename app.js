require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)
app.get('/students', studentsRouter)
app.use('/login', studentsRouter)
app.use('/signup', studentsRouter)
app.listen(3000, () => console.log('server started'))