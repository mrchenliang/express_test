
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
        {name: 'Bellagio Hotel and Casino', city: 'Las Vegas'},
        {name: "Caesar's Palace", city: 'Las Vegas'},
        {name: 'The Venetian Hotel and Casino', city: 'Las Vegas'},
        {name: 'Luxor Hotel and Casino', city: 'Las Vegas'},
        {name: 'Park Central Hotel', city: 'New York'},
        {name: 'Four Seasons Hotel', city: 'New York'},
        {name: 'Millenium Hilton', city: 'New York'},
        {name: 'Fairmount Royal York Hotel', city: 'Toronto'},
        {name: 'Ritz-Carlton Hotel', city: 'Toronto'},
        {name: 'Sheraton Center Hotel', city: 'Toronto'},
        {name: 'Hilton Downtown Hotel', city: 'Toronto'},
        {name: 'Hilton Midtown Hotel', city: 'Toronto'},
        {name: 'Hilton Airport Hotel', city: 'Toronto'},
        {name: 'Hyatt Regency Hotel', city: 'Toronto'},
        {name: 'The Strathcona Hotel', city: 'Toronto'},
      ]);
    });
};
