const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const app = express()

//routes for restaurant
const restaurantsRoutes = require('./routes/restaurants')

// data parse - used to parse post data

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//Restaurants
app.use('/restaurants', restaurantsRoutes)


app.listen(4000, () => {
  console.log('Listening on http://localhost:4000')
})
