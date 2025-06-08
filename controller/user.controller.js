const userModel = require("../model/user.model");

// CREATE USER
const createUser = async (req, res) => {
  console.log("✅ POST /user/create route reached");
  try {
    const { username, email, age, address, bio } = req.body;
    const newUser = await userModel.create({ username, email, age, address, bio });

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create the user",
      data: error,
    });
  }
};

// GET ALL USERS
const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error retrieving users",
      data: error,
    });
  }
};

// GET ONE USER
const getOneUser = async (req, res) => {
  try {
    const oneUser = await userModel.findById(req.params.id);
    res.status(200).json({
      message: "User gotten",
      data: oneUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to fetch one user",
      data: error,
    });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { username, age, bio, address } = req.body;
    const updated = await userModel.findByIdAndUpdate(
      req.params.id,
      { username, age, bio, address },
      { new: true }
    );

    res.status(200).json({
      message: "User updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update user",
      data: error,
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const deleted = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "User deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete user",
      data: error,
    });
  }
};

module.exports = { createUser, getUser, getOneUser, updateUser, deleteUser };
