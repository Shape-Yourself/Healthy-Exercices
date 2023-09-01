const express = require("express");
const router = express.Router();
const Fitness = require("../models/Fitness.model");
const mongoose = require("mongoose");
const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';


