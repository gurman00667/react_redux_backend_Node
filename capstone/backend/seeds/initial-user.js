
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'sam@sam.com', password: '123456', entrepneurs_investors: true},
        {id: 2, email: 'sam1@sam.com', password: '123456', entrepneurs_investors: false}
      ]);
    });
};
