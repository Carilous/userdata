const userModel = require('../model/user.model');

const createUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { name, email, address, phone } = req.body;

        // Create a new user instance
        
        const newUser = new userModel({
            name,
            email,
            address,
            phone
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        // Handle errors and send error response
        res.status(500).json({
            message: 'Error creating user',
            data: error.message
        });
    }


};
const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await userModel.find();

        // Send success response with user data
        res.status(200).json({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        // Handle errors and send error response
        res.status(500).json({
            message: 'Error retrieving users',
            data: error.message
        });
    }
};

module.exports = {createUser, getAllUsers};