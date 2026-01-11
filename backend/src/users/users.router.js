const express = require("express");
const { validationResult } = require("express-validator");
const usersController = require("./users.controller.js");
const { StatusCodes } = require("http-status-codes");
const createUserValidator = require("./validators/createUser.validator.js");
const upload =require("../middleware/user.multer.middleware.js")

const usersRouter = express.Router();

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Shape of task response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

usersRouter.post("/create", [upload.single("picture"), createUserValidator], (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return usersController.createUser(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});


module.exports = usersRouter;