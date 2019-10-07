exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("table_name")
      //truncate resets the primary key everytime
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("table_name").insert([
          { id: 1, VIN: "VIN 1", model: "GMC", make: 2012, mileage: 15000 },
          { id: 1, VIN: "VIN 2", model: "lambo", make: 2016, mileage: 15123 },
          { id: 1, VIN: "VIN 3", model: "porsche", make: 2011, mileage: 1 }
        ]);
      })
  );
};
