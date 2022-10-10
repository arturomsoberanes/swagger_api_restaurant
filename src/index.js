const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const app = express()
const cors = require('cors')
const config = require('./config.js')

//routes for restaurant
let restaurantsRoutes = require('./routes/restaurants')

const PORT = config.PORT
const HOST = config.HOST


// data parse - used to parse post data

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


//Restaurants
app.use('/restaurants', restaurantsRoutes)


app.listen(PORT, HOST, () => {
  console.log('Running in port ' + PORT)
})
