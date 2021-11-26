const express = require("express");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
const router = express.Router();

router.get('/livre', async (req, res) => {
    
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    db.Livre.findAll({ where: condition })
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


router.get('/livre/:id', async (req, res) => {
    try {
  var livre = await db.Livre.findOne({where:{id: req.params.id}})
  return res.json({
    livre
  });
  } catch (err) {
  console.log(err)
  return res.status(500).json(err)
  }
  });

module.exports = router;