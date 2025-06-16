const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log(`Server is running on local host 3000`)
})