"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PATCH = exports.GET = exports.PUT = exports.POST = void 0;
const axios_1 = __importDefault(require("axios"));
const POST = async (URL, data = {}, options) => {
    try {
        const response = await axios_1.default.post(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
};
exports.POST = POST;
const GET = async (URL, options) => {
    try {
        const response = await axios_1.default.get(URL, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
};
exports.GET = GET;
const PATCH = async (URL, data, options) => {
    try {
        const response = await axios_1.default.patch(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
};
exports.PATCH = PATCH;
const PUT = async (URL, data, options) => {
    try {
        const response = await axios_1.default.put(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
};
exports.PUT = PUT;
const DELETE = async (URL, options) => {
    try {
        const response = await axios_1.default.delete(URL, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
};
exports.DELETE = DELETE;
