const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/account-deletion", (req, res, next) => {
    User.findByIdAndDelete(id)
    .then(() => res.redirect('/'))
    .catch(error => next(error));
})



module.exports = router;