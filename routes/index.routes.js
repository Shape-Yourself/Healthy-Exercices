const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET exercise planner */
router.get("/exercise-planner", (req, res, next) => {
  res.render("exercise-planner");
});



module.exports = router;
