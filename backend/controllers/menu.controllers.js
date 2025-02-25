const RestaurantModel = require("../models/restaurant.model");

//get restaurant info
module.exports.getRestaurantInfo = async (req, res, next) => {
  const { rest_id } = req.params;
  const restaurant = await RestaurantModel.findOne(
    { rest_id: rest_id },
    "images email description name phone_number rating reviewers"
  );
  res.json({ restaurant });
};
