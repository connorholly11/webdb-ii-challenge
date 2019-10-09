exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tbl => {
    //creates a primary key called id which auto increments
    tbl.increments();

    tbl
      .text("VIN")
      .unique()
      .notNullable();
    tbl.text("model").notNullable();
    tbl.integer("make").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.text("transmission type");
    tbl.text("status of title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
