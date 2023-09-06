const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET exercise planner */
/* See plan.routes.js */

// GET new plan form */
router.get("/new-plan-form", (req, res, next) => {
  res.render("new-plan-form");
});

// GET exercises list */
router.get("/exercises-list", (req, res, next) => {
  res.render("exercises-list");
});



module.exports = router;
