const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Not sure we need this

const Week = require('../models/Week.model'); // Import week model

const  titleFromForm = '...';
const  descriptionFromForm = '...';

// Create new instance of Week model
const newWeek = new Week({
    title: titleFromForm,
    description: descriptionFromForm,
    monday: 'objectIdMonday',
    monday: 'objectIdMonday',
    monday: 'objectIdMonday',
    monday: 'objectIdMonday',
    monday: 'objectIdMonday',
    monday: 'objectIdMonday',
    ...
});

newWeek.save()
    .then(savedWeek => {
        console.log('New week uploaded:', savedWeek);
    })
    .catch(error => {
        console.error('Error uploading week:', error);
    });