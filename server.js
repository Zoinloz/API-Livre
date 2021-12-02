const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

  
  const genreRouter = require('./controllers/genre-controller');
  app.use('/', genreRouter);  

  const livreRouter = require('./controllers/livre-controller');
  app.use('/', livreRouter);  

  
});