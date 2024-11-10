import { Auth } from "../middleware/authentication";
import { Router, Response, NextFunction, RequestHandler } from "express";
import { middlewareObjI } from "../middleware/commonMiddleware";
import { CalculatorControllerController } from "../controller/calculatorController";
import { baseValidation } from "../validation/baseValidation";
import { userManagementValidation } from "../validation/userManagementValidation";
const auth = new Auth();
const calculatorControllerController = new CalculatorControllerController();
// Define the types of the middlewaresDownloadObj to ensure it complies with TypeScript
export const middlewaresCalculaterObj: {
  [key: string]: RequestHandler[];
} = {
  SUBSTRING: [
    ...userManagementValidation.substring,
    auth.authentication, // The validation is an array of middlewares
    calculatorControllerController.substring,
  ],
  BINARYTREE: [
    ...userManagementValidation.binaryTree,
    auth.authentication, // The validation is an array of middlewares
    calculatorControllerController.binaryTree,
  ],
};
