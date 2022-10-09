const express = require('express');
const router = express.Router()
const restaurantController = require('../controllers/restaurants')

router.get('/', restaurantController.getRestaurants)

router.post('/create', restaurantController.createRestaurant)

router.put('/update/:id', restaurantController.updateRestaurant)

router.delete('/delete/:id', restaurantController.deleteRestaurant)

module.exports = router

