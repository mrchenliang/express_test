const db = require("../config/dbConfig.js");

// GET ALL HOTEL
const findHotel = () => {
  const hotels = db("hotels");
  return db("hotels");
};

// GET SPECIFIC HOTEL BY ID
const findHotelByName = name => {
  const hotels = db("hotels")
    .where("name", 'like', `%${name}%`)
    .limit(10)
  return hotels;

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM users
  //                  WHERE id = ${id}`);
};


module.exports = {
  findHotel,
  findHotelByName,
};
