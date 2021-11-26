const express = require("express");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
const router = express.Router();

router.get('/livre', async (req, res) => {
    /*const title = req.query.title;
    const author = req.query.author;
    var condition =
    {
        where:
        {
            title: "Doe",
            author: "Jane"
        }
    }*/

    db.Livre.findAll(/*{ where: condition }*/)
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

module.exports = router;