import { Request, Response } from "express";
import {
  binaryTree,
  createUser,
  login,
  substring,
} from "../service/userService";
import { sendResponse } from "../utils/statusCodeResponse";
import { CustomUserRequest } from "../middleware/commonMiddleware";

export class CalculatorControllerController {
  // super user signup
  public async createUser(req: Request, res: Response) {
    try {
      const data = await createUser(req.body);
      if (!data?.success) {
        throw new Error(data?.message || "SomeThing Went Wrong");
      }
      return sendResponse(req, res, 200, data);
    } catch (error) {
      return sendResponse(req, res, 200, {
        success: false,
        data: {},
        message: error.message,
        statusCode: 404,
      });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const data = await login(req.body);
      if (!data?.success) {
        throw new Error(data?.message || "SomeThing Went Wrong");
      }
      return sendResponse(req, res, 200, data);
    } catch (error) {
      return sendResponse(req, res, 200, {
        success: false,
        data: {},
        message: error.message,
        statusCode: 404,
      });
    }
  }

  public async substring(req: CustomUserRequest, res: Response) {
    try {
      const data = await substring(req);
      if (!data?.success) {
        throw new Error(data?.message || "SomeThing Went Wrong");
      }
      return sendResponse(req, res, 200, data);
    } catch (error) {
      return sendResponse(req, res, 200, {
        success: false,
        data: {},
        message: error.message,
        statusCode: 404,
      });
    }
  }

  public async binaryTree(req: CustomUserRequest, res: Response) {
    try {
      const data = await binaryTree(req);
      if (!data?.success) {
        throw new Error(data?.message || "SomeThing Went Wrong");
      }
      return sendResponse(req, res, 200, data);
    } catch (error) {
      return sendResponse(req, res, 200, {
        success: false,
        data: {},
        message: error.message,
        statusCode: 404,
      });
    }
  }
}
