
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('summury').del()
    .then(function () {
      // Inserts seed entries
      return knex('summury').insert([
        {id: 1, header: 'Welcome', highlights: 'to', body: 'test page'}
      ]);
    });
};

