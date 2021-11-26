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
        var livre = await db.Livre.findOne({ where: { id: req.params.id } })
        return res.json({
            livre
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
});

router.post('/livre', async (req, res) => {
    try {
        const newLivre = {
            title: req.body.title,
            author: req.body.author,
            image: req.body.image,
            description: req.body.description,
            genreId: req.body.genreId,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        var livre = await db.Livre.create(newLivre);
        return res.json({
            livre
        });
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
});

router.delete('/livre/:id', async (req, res) => {
    const id = req.params.id
    try {
        const livre = await db.Livre.findOne({ where: { id } })

        await livre.destroy()

        return res.json({ message: 'Livre deleted !' })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
});


router.put('/livre/:id', async (req, res) => {
    try {

        var livre = await db.Livre.findOne({ where: { id: req.params.id } })

        livre.title = req.body.title;
        livre.author = req.body.author;
        livre.image = req.body.image;
        livre.description = req.body.description;
        livre.genreId = req.body.genreId;
        livre.updatedAt = new Date();
        await livre.save();

        return res.json({
            livre
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
});


module.exports = router;