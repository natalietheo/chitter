const express = require('express')
const ClucksController =  require('../controllers/clucksController.js');

// const Clucks = require('../models/clucksModel')
const router = express.Router()

// GET all clucks
router.get('/', ClucksController.Index);
router.post('/', ClucksController.Create);

module.exports = router