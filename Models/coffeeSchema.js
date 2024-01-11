const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  manufacturer: {
    loc: String,
    year_of_origin: Number,
    country_of_origin: String,
  },
  brew: {
    base: {
      bean: String,
      grind: String,
      roast: String
    },
    best_enjoyed_with: [
      {
        title: String,
        image: String
      }
    ],
    taste_profile:{
      acidity: Number,
      bitterness: Number,
      notes: [
        {
          note: String
        }
      ]
    },
    method: [{
      equipment: String,
      origin: String,
      characteristics: [{
        feature: String
      }]
    }],
    general_recipe:{
      ingredients: [{
        to_add: String
      }],
      preparation_time: String
    }
  }
})


module.exports.coffeeModel = mongoose.model("coffee",coffeeSchema);
