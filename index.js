// all the modules we install and we need to require
const mongoose = require('mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const url = 'mongodb://localhost:27017/placies'

mongoose.Promise = global.Promise
mongoose.connect(url, {
  useMongoClient: true
}).then(
  function () { // resolve cb
    console.log('connected successfully')
  },
  function (err) { // reject cb
    console.log(err)
  }
)
// this is the express itself
const app = express()

// set middleware
app.use(express.static('public'))

app.engine('handlebars', exphbs({}))
app.set('view engine', 'handlebars')

// setup all files the project needs to require
const placesRoute = require('./routes/placeRoute')

// setup the routes
app.use('/places', placesRoute)

// and this is opening the port
const port = 5000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
