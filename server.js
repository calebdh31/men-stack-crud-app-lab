require('dotenv').config()
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Mongo connected'))
.catch(err => console.log('Mongo error:', err))

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log(`Server is running on local host 3000`)
})