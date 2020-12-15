
exports.up = function(knex, Promise) {
  return knex.schema.createTable("hotels", tbl => {
    tbl.increments();
    tbl.string("name");
    tbl.string("city");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("hotels");
};
