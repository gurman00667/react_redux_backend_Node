
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entrepneurs').del()
    .then(function () {
      // Inserts seed entries
      return knex('entrepneurs').insert([
        {id: 1, about_entrepneurs: 1}
      ]);
    }
    
    );
};
