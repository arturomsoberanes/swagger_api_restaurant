const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const app = express()
const cors = require('cors')

//routes for restaurant
const restaurantsRoutes = require('./routes/restaurants')

// data parse - used to parse post data

var bodyParser = require('body-parser');
app.set('port', process.env || 5000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//Restaurants
app.use('/restaurants', restaurantsRoutes)


app.listen(app.get('port'), () => {
  console.log('Running in port ' + app.get('port'))
})
