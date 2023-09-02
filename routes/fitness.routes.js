const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Fitness = require("../models/Fitness.model"); // import model
const exerciseData = require(/* Where is Json file? */); // import Json file

// const axios = require('axios'); // Axios to make http request
// const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle='; // data to fetch

// Display json exercises on "exercises-overview" hbs, using Fitness.model
router.get('/exercises-overview', (req, res) => {

    Fitness.find({})
        // Fetch data from local Json
        .then((exercises) => {
        return Fitness.insertMany(exerciseData)
        })
        // Render data on the hbs view
        .then((exercises) => {
        res.render("exercises-overview", { exercises });
        })
        // Error
        .catch ((err) => {
        console.error(err);
    });
});

module.exports = router;

