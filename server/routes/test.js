const express = require('express');
const router = express.Router();
const TestController = require('../controllers/test');

// Get test route
router.get('/:id', TestController.getTest);

module.exports = router;
