const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Plan = require('../models/Plan.model'); // Import Week model

// The user populates exercise-planner with the following data:
router.post('/exercise-planner', (req, res) => {
    //fetch the input from these fields
    const title = req.body.title;
    const description = req.body.description;
    const selectedExercises = req.body.selectedExercises;

    let newPlan;

    // Create & save new Plan
    Plan.create({ title, description })
        .then(createdPlan => {
            // Redirect to url display
            newPlan = createdPlan;
            // Redirect to URL displaying exercise list & new plan
            res.redirect(`/exercise-list/${newPlan._id}`);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred.');
        });
    
    // Add selection in exercises-list.
    // Find plan with the id newPlan._id
    Plan.findById(newPlan._id)
        .then(plan => {
            plan.selectedExercises = req.body.selectedExercises;
            
            return plan.save();
        })  
        .then(updatedPlan => {
            // TODO: success handling
        })
        .catch(error => {
            console.error(error);
        });
});


// If user makes GET request to '/exercise-planner'...
router.get('/exercise-planner', (req, res) => {
    // ... all weekly plans get retrieved from MondoDB database
    // Plan.find ({userId}) -> sth similar to filter weekly plans
    Plan.find()
        // Then render the exercise planner hbs...
        // and pass the "plans" data to it (now available as a variable in the hbs
        .then(plans => {
            res.render("exercise-planner", { plans });
        })
        .catch(error => {
            console.error(error);
        });
});

module.exports = router;

