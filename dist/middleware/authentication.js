"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const configEnv_1 = require("../config/configEnv");
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
class Auth {
    async authentication(req, res, next) {
        try {
            let token;
            if (req.headers.authorization) {
                token = req.headers.authorization;
                if (!token) {
                    throw new Error("Not Authorized, Token Failed ");
                }
                let decode;
                try {
                    decode = jwt.verify(token, configEnv_1.config?.JWT_SECRET || "test");
                }
                catch (error) {
                    decode = {};
                }
                if (!decode) {
                    throw new Error("Not Authorized, Token Failed ");
                }
                req.user = decode;
                next();
            }
            else {
                throw new Error("Not Authorized, Token Failed ");
            }
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
            });
        }
    }
    async authorization(req, res, next) {
        try {
            if (req.user.role === "admin") {
                next();
            }
            else {
                throw new Error("Not Authorized, For api ");
            }
        }
        catch (error) {
            return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                success: false,
                data: {},
                message: error.message,
            });
        }
    }
}
exports.Auth = Auth;
