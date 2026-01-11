const { body } = require("express-validator");

const createUserValidator = [
  body("firstname", "firstName string and required")
    .isString()
    .notEmpty()
    .isLength({ max: 100 })
    .trim(),
  body("lastname", "lastName string and required")
    .isString()
    .optional()
    .isLength({ max: 100 })
    .trim(),
  body("email", "Must be a valid email").isEmail().notEmpty().trim(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must include at least one number, one uppercase letter, one lowercase letter, and one special character."
    ),
    body('userid','Not valid').optional().trim(),
];

module.exports = createUserValidator;