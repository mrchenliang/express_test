exports.up = function(knex, Promise) {
  return knex.schema.table("users", tbl => {
    tbl.string('lastName');
    tbl.boolean("alive").defaultTo(true);
  });
};
  
exports.down = function(knex, Promise) {
  return knex.schema.table("users", table => {
    table.dropColumn('lastName');
    table.dropColumn('alive');
  });
};
