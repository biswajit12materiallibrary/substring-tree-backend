"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewaresUserObj = void 0;
const authentication_1 = require("../middleware/authentication");
const calculatorController_1 = require("../controller/calculatorController");
const userManagementValidation_1 = require("../validation/userManagementValidation");
const auth = new authentication_1.Auth();
const calculatorControllerController = new calculatorController_1.CalculatorControllerController();
// Define the types of the middlewaresDownloadObj to ensure it complies with TypeScript
exports.middlewaresUserObj = {
    SIGNUP: [
        ...userManagementValidation_1.userManagementValidation.createUser,
        calculatorControllerController.createUser,
    ],
    LOGIN: [
        ...userManagementValidation_1.userManagementValidation.login,
        calculatorControllerController.login,
    ],
};
