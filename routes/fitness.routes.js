const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Fitness = require("../models/Fitness.model"); // import model

// const axios = require('axios'); // Axios to make http request
// const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle='; // data to fetch

// Display json exercises on "exercises-overview" hbs, using Fitness.model
router.get('/exercises-overview', (req, res) => {
    Fitness.find()
        .then(data => {
            res.render("views/exercises-overview.hbs", data)
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;

