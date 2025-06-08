const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

router.route("/newuser").post(createUser);
router.route("/viewalluser").get(getUser);
router.route("/viewoneuser/:id").get(getOneUser);
router.route("/userupdate/:id").patch(updateUser);
router.route("/removeuser/:userID").delete(deleteUser);

module.exports = router;
