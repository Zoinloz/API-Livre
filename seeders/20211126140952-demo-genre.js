'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Genres', [
      { name: 'Romance' },
      { name: 'Policier' },
      { name: 'Science-Fiction' },
      { name: 'Manga' },
      { name: 'Roman' },
    ], {});


    return await queryInterface.bulkInsert('Livres', [
      {
        title: 'After tome 1',
        author: 'Anna TODD',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71lsYe6zRCL.jpg',
        description: 'lorem ipsum',
        genreId: 1
      },

      {
        title: 'One Piece',
        author: 'Eiichirō Oda',
        image: 'https://images.bfmtv.com/FaqsZxL5IV0GD2FrPG03VJ-3QF4=/2x1:914x514/912x0/images/-331861.jpg',
        description: 'lorem ipsum',
        genreId: 4
      },

      {
        title: 'Shining, l\'enfant lumière',
        author: 'Stephen King',
        image: 'https://images-na.ssl-images-amazon.com/images/I/619OiTawH0L.jpg',
        description: 'lorem ipsum',
        genreId: 5
      },
      
      {
        title: 'Les Enfants de Dune',
        author: 'Frank Herbert',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Z5rGEeL5L.jpg',
        description: 'lorem ipsum',
        genreId: 3
      },

    ], {});


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Livres', null, {});
    await queryInterface.bulkDelete('Genres', null, {});

  }
};
