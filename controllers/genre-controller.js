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

router.get('/genre/:id', async (req, res) => {
  try {
var genre = await db.Genre.findOne({where:{id: req.params.id}})
return res.json({
  genre
});
} catch (err) {
console.log(err)
return res.status(500).json(err)
}
});


router.post('/genre', async (req, res) => {
  try {
    const newGenre = {
      name: req.body.name,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    if (newGenre.name !== "") {
      var genre = await db.Genre.create(newGenre);
      return res.json({
        genre
      });
    }

    else {
      return res.status(400).json("Name Null")
    }

  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
});

router.put('/genre/:id', async (req, res) => {
  try {
    
    var genre = await db.Genre.findOne({where:{id: req.params.id}})

    genre.name = req.body.name;

    await genre.save();
    
    return res.json({
      genre
    });
    } catch (err) {
    console.log(err)
    return res.status(500).json(err)
    }
  });

  router.delete('/genre/:id', async (req, res) => {
    const id = req.body.id
    try {
      const genre = await db.Genre.findOne({ where: { id } })
  
      await genre.destroy()
  
      return res.json({ message: 'Genre deleted !' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  });


module.exports = router;