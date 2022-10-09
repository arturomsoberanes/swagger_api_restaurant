var restaurants = [
  {
    id:0,
    name: "Woodshill",
  },
  {
    id:1,
    name: "Fiorellas",
  },
  {
    id:2,
    name: "Burger King"
  }
]

const getRestaurants = (req, res) => {
  console.log(req.body)
  res.send(restaurants)
}

const createRestaurant = (req, res) => {
  restaurants.push({
    id: Number(req.body.id),
    name: req.body.name
  })
  res.send(`${JSON.stringify(restaurants)} created`)
}

const updateRestaurant = (req, res) => {
  console.log('Update:id:'+req.params.id)
  restaurants.map(restaurant => {
    if(restaurant.id === Number(req.params.id)) {
      restaurant.name = req.body.name
    }
    return restaurant
  })
  res.send(`Restaurants updated: ${JSON.stringify(restaurants)}`)

}

const deleteRestaurant = (req, res) => {
  console.log('delete:id:'+req.params.id)
  restaurants = restaurants.filter( restaurants => {
    return restaurants.id !== Number(req.params.id)
  })
  res.send(`restaurants left: ${JSON.stringify(restaurants)}`)
}

module.exports = {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
}
