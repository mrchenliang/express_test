const router = require("express").Router();

const hotelsDB = require("../models/hotels-model.js");

// GET ALL HOTELS
router.get("/", async (req, res) => {
  try {
    const hotels = await hotelsDB.findHotel();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// GET HOTELS BY NAME
router.get("/search", async (req, res) => {
  const hotelName = req.query.name;
  try {
    const hotels = await hotelsDB.findHotelByName(hotelName);
    if (!hotels) {
      res
        .status(404)
        .json({ err: "The hotel with the specified name does not exist" });
    } else {
      const filteredHotels = hotels.reduce((c, v) => {
        c[v.city] = c[v.city] || [];
        c[v.city].push(v);
        return c
      }, {})
      res.status(200).json(filteredHotels);
    }
  } catch (err) {
    res.status({ err: "The user information could not be retrieved" });
  }
});

module.exports = router;
