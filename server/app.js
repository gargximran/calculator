const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./db')

const sum = require('./Controller/Sum')

const sumValidator = require('./validators/subDataValidator')

const formParser = require('./middlewares/formParser')


const app = express()


app.use(cors())
app.use(formParser)
app.use(morgan('dev'))


app.post('/calculate',sumValidator, sum)

app.listen(process.env.PORT, () => {
    console.log('App is running at port ' + process.env.PORT);
    connectDB()
})