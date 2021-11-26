const express = require("express");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
const router = express.Router();

router.get('/genre', async (req, res) => {
    const name = req.query.name;
        var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
      
        db.Genre.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
});

router.post('/genre', async (req, res) => {
  try {
    const newGenre = {
      name: req.body.name,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    var genre = await db.Genre.create(newGenre);
    return res.json({
      genre
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
  });


module.exports = router;