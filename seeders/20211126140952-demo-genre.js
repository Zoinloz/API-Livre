'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Genres', [
      { name: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Policier', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Science-Fiction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Manga', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roman', createdAt: new Date(), updatedAt: new Date() },
    ], {});


    return await queryInterface.bulkInsert('Livres', [
      {
        title: 'After tome 1',
        author: 'Anna TODD',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71lsYe6zRCL.jpg',
        description: 'lorem ipsum',
        genreId: 1, createdAt: new Date(), updatedAt: new Date()
      },

      {
        title: 'One Piece',
        author: 'Eiichirō Oda',
        image: 'https://images.bfmtv.com/FaqsZxL5IV0GD2FrPG03VJ-3QF4=/2x1:914x514/912x0/images/-331861.jpg',
        description: 'lorem ipsum',
        genreId: 4, createdAt: new Date(), updatedAt: new Date()
      },

      {
        title: 'Shining, l\'enfant lumière',
        author: 'Stephen King',
        image: 'https://images-na.ssl-images-amazon.com/images/I/619OiTawH0L.jpg',
        description: 'lorem ipsum',
        genreId: 5, createdAt: new Date(), updatedAt: new Date()
      },
      
      {
        title: 'Les Enfants de Dune',
        author: 'Frank Herbert',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Z5rGEeL5L.jpg',
        description: 'lorem ipsum',
        genreId: 3, createdAt: new Date(), updatedAt: new Date()
      },

    ], {});


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Livres', null, {});
    await queryInterface.bulkDelete('Genres', null, {});

  }
};
