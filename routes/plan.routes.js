const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Plan = require('../models/Plan.model'); // Import Week model
const Fitness = require("../models/Fitness.model"); // import model
const isLoggedIn = require('../middleware/isLoggedIn')


// Step 0a - Exercise planner (Home when logged in)
router.get('/exercise-planner', (req, res) => {
    // req.session is an object where we can store data as long as the session is active
    const userId = req.session.currentUser._id;

    // Find weekly plans that the user created
    // If empty, the .populate does nothing.
    Plan.find({userId})

        .populate('selectedExercises.exercise')
        // Then render the exercise planner hbs...
        // and pass the "plans" data to it (now available as a variable in the exercise-planner hbs)
        .then((plans) => {
            res.render("exercise-planner", { plans });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("An error occurred. Step 0a, 'Render ecercise planner', failed")
        })
});

// Step 0b - Exercise planner - DELETE plan
router.post('/exercise-planner/delete/:planId', (req, res) => {
    const planId = req.params.planId;
    const userId = req.session.currentUser._id;

    // Find weekly plans that the user created
    Plan.findOneAndDelete({ _id: planId, userId })
        // Then render the exercise planner hbs...
        // and pass the "plans" data to it (now available as a variable in the exercise-planner hbs)
        .then(() => {
            res.redirect('/plan/exercise-planner');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("An error occurred. Deleting the plan failed.")
        })
});

// ------------------------------------------------------

// Step 1a - Show new plan form
router.get("/exercise-planner/create", (req, res, next) => {
    res.render("new-plan-form")
});

// Step 1b - Create new Plan
router.post('/exercise-planner/create', (req, res) => {
    // data sent as the POST request's body
    const title = req.body.title;
    const description = req.body.description;
    const selectedExercises = req.body.selectedExercises;
    const userId = req.session.currentUser._id;

    // After submitting in "new form" hbs, create new Plan
    Plan.create({ title, description, userId, selectedExercises: [] })

        .then((newPlan) => {
            req.session.planId = newPlan._id;
            // Plan model update
            // Redirect to URL displaying exercise list & new plan
            res.redirect(`/plan/exercises-list/${newPlan._id}`)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("An error occurred. Step 1, 'Create new plan', failed")
        })
});

// ------------------------------------------------------

// 2a - Show link with list of exercises // TODO: Why planId here?
router.get('/exercises-list/:planId', (req, res) => {
    const {planId} = req.params

    // Find & display all exercises
    Fitness.find()
      .then((exercises) => {
        res.render("exercises-list", { exercises, planId });
        // each exercise gets a unique _id field in MDB
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
        res.status(500).send("An error occurred. Step 'Show link with list of exercises', failed.");
      })
    
});

// Step 2b - Select exercises & send data to updated plan
router.post('/exercises-list/:planId', (req, res) => {
    const { planId } = req.params;
    selectedExercises = req.body.selectedExercises;

    // error handling if selectedExercises not available
    if (!selectedExercises) {
        return res.status(400).send("Error: selectedExercises are not available.")
    }
    selectedExercises = selectedExercises.filter(item => item);
    console.log('selectedExercises:', selectedExercises);

    const splitSelectedExercises = selectedExercises.map((item) => {
        // split each selected Exercise array item into day & exercise id
        const [day, exerciseId] = item.split('_');
        // ... new object for each with day & exercise
        return { day, exercise: exerciseId };
    });

    // Find plan we're using & update it (by id, updates to apply)
    Plan.findByIdAndUpdate(planId, { selectedExercises: splitSelectedExercises })
        .then((updatedPlan) => {
            // Redirect back to exercise
            res.redirect('/plan/exercise-planner')
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send("An error occurred. Step 'Select exercises & send data', failed")
        })
});

// ------------------------------------------------------


// Step 2c - get the id of the specific plan
// ...


// ------------------------------------------------------


// Step 3 - needs to push ids of exercises into plan _>  selectedExercises: []


// ------------------------------------------------------


/*
// Step 2x - Select exercises & send data
router.post('/exercise-planner/:planId', (req, res) => {
    const { planId } = req.params;

    // Find plan by Id in the link
    Plan.findById(planId)
        .then((plan) => {
            res.render('select-exercises', { plan })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('An error occurred. Step 2a, "Select exercises", failed')
        })
});
*/


// Post request for exercise-planner
// Create new exercise
// Delete exercise

module.exports = router;

