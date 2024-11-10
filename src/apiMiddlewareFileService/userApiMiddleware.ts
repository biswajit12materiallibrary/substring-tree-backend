import { Auth } from "../middleware/authentication";
import { Router, Response, NextFunction, RequestHandler } from "express";
import { middlewareObjI } from "../middleware/commonMiddleware";
import { CalculatorControllerController } from "../controller/calculatorController";
import { baseValidation } from "../validation/baseValidation";
import { userManagementValidation } from "../validation/userManagementValidation";
const auth = new Auth();
const calculatorControllerController = new CalculatorControllerController();
// Define the types of the middlewaresDownloadObj to ensure it complies with TypeScript
export const middlewaresUserObj: {
  [key: string]: RequestHandler[];
} = {
  SIGNUP: [
    ...userManagementValidation.createUser, // The validation is an array of middlewares
    calculatorControllerController.createUser,
  ],
  LOGIN: [
    ...userManagementValidation.login, // The validation is an array of middlewares
    calculatorControllerController.login,
  ],
};
