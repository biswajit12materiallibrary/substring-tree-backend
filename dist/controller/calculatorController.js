"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorControllerController = void 0;
const userService_1 = require("../service/userService");
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
class CalculatorControllerController {
    // super user signup
    async createUser(req, res) {
        try {
            const data = await (0, userService_1.createUser)(req.body);
            if (!data?.success) {
                throw new Error(data?.message || "SomeThing Went Wrong");
            }
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, data);
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
                statusCode: 404,
            });
        }
    }
    async login(req, res) {
        try {
            const data = await (0, userService_1.login)(req.body);
            if (!data?.success) {
                throw new Error(data?.message || "SomeThing Went Wrong");
            }
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, data);
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
                statusCode: 404,
            });
        }
    }
    async substring(req, res) {
        try {
            const data = await (0, userService_1.substring)(req);
            if (!data?.success) {
                throw new Error(data?.message || "SomeThing Went Wrong");
            }
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, data);
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
                statusCode: 404,
            });
        }
    }
    async binaryTree(req, res) {
        try {
            const data = await (0, userService_1.binaryTree)(req);
            if (!data?.success) {
                throw new Error(data?.message || "SomeThing Went Wrong");
            }
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, data);
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
                statusCode: 404,
            });
        }
    }
}
exports.CalculatorControllerController = CalculatorControllerController;
