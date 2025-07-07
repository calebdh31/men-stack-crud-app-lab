require('dotenv').config()
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const Planet = require('./models/Planet.js')

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

app.get('/planets', async (req, res) => {
    const planets = await Planet.find()
    res.render('index', {planets})
})

//New planet form
app.post('/planets/new', (req, res) => {
    res.render('new')
})

//Create a new planet
app.get('/planets', (req, res) =>{
    // const newPlanet = new models.Planet
    console.log(req.body)
    res.redirect('/planets')
})

app.post('/planets', async (req, res) => {
    const hasRings = req.body.hasRings === 'on'
    const newPlanet = new Planet({
        name: req.body.name,
        radius: req.body.radius,
        hasRings: hasRings,
        orbitalPeriod: req.body.orbitalPeriod
        
    })
    await newPlanet.save()
    res.redirect('/planets')
})

app.listen(3000, () => {
    console.log(`Server is running on local host 3000`)
})

