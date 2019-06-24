
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('about_entrepneurs').del()
    .then(function () {
      // Inserts seed entries
      return knex('about_entrepneurs').insert([
        {id: 1, header: 'Welcome', highlights: 'to', body: 'about =====Lorem ipsum dolor sit amet, consectetu '}
      ]);
    });
};

