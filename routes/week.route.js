const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Not sure we need this
/* const exerciseData = require /* Where is Json file? */; // import Json file */


/* Not really a route, let's see where to put it */

const emptyDay = [
    {day: 'Monday', exercises: []},
    {day: 'Tuesday', exercises: []},
    {day: 'Wesday', exercises: []},
    {day: 'Thursday', exercises: []},
    {day: 'Friday', exercises: []},
    {day: 'Saturday', exercises: []},
    {day: 'Sunday', exercises: []},
]

res.render('week', {days: emptyDay});