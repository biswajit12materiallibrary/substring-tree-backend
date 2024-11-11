"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const configEnv_1 = require("../config/configEnv");
const RATE_LIMIT = (configEnv_1.config === null || configEnv_1.config === void 0 ? void 0 : configEnv_1.config.RATE_LIMIT) || "RATE_LIMIT";
const timeFrame = 60 * 1000; // 1 min in milliseconds
const messageData = {
    success: false,
    data: [],
    message: `You have exceeded the ${RATE_LIMIT} requests in 1 min limit!`,
};
exports.rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: timeFrame,
    max: RATE_LIMIT,
    message: messageData,
    standardHeaders: true,
    legacyHeaders: false,
});
