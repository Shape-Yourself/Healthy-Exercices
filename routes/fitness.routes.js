const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Fitness = require("../models/Fitness.model"); // import model


// GET a list of exercises
router.get('/exercises-list', (req, res) => {
    Fitness.find()
      .then(exercises => {
        res.render("exercises-list", { exercises });
        // each exercise gets a unique _id field in MDB
      })
      .catch(error => {
        // Handle errors
        console.error(error);
        res.status(500).send("An error occurred.");
      });
});


/* Commented out as exercise-planner shall now show Plan model

router.get('/exercise-planner', (req, res) => {
    Fitness.find()
      .then(exercises => {
        res.render("exercise-planner", { exercises });
      })
      .catch(error => {
        // Handle errors
        console.error(error);
        res.status(500).send("An error occurred.");
      });
});
*/


/* What did you plan for this to do?

router.get('/new-plan-form', (req, res) => {
    Fitness.find()
      .then(exercises => {
        res.render("new-plan-form", { exercises });
      })
      .catch(error => {
        // Handle errors
        console.error(error);
        res.status(500).send("An error occurred.");
      });
});
*/


module.exports = router;

