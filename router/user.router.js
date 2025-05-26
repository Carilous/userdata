const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();
const { createUser, getAllUsers } = userController;
// Define routes for user operations
router.post('/create', createUser);
router.get('/all', getAllUsers);
// Export the router to be used in the main application
module.exports = router;