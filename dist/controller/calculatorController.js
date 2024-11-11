"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorControllerController = void 0;
const userService_1 = require("../service/userService");
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
class CalculatorControllerController {
    // super user signup
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, userService_1.createUser)(req.body);
                if (!(data === null || data === void 0 ? void 0 : data.success)) {
                    throw new Error((data === null || data === void 0 ? void 0 : data.message) || "SomeThing Went Wrong");
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
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, userService_1.login)(req.body);
                if (!(data === null || data === void 0 ? void 0 : data.success)) {
                    throw new Error((data === null || data === void 0 ? void 0 : data.message) || "SomeThing Went Wrong");
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
        });
    }
    substring(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, userService_1.substring)(req);
                if (!(data === null || data === void 0 ? void 0 : data.success)) {
                    throw new Error((data === null || data === void 0 ? void 0 : data.message) || "SomeThing Went Wrong");
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
        });
    }
    binaryTree(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, userService_1.binaryTree)(req);
                if (!(data === null || data === void 0 ? void 0 : data.success)) {
                    throw new Error((data === null || data === void 0 ? void 0 : data.message) || "SomeThing Went Wrong");
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
        });
    }
}
exports.CalculatorControllerController = CalculatorControllerController;
