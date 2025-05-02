const mongoose = require("mongoose");

const FuelSchema = new mongoose.Schema({
  coal: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  naturalgas: {
    type: Number,
    required: true
  },
  oil: {
    type: Number,
    required: true
  },
  uranium: {
    type: Number,
    required: true
  },
  year: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("myFuel", FuelSchema, "FuelPrices");
