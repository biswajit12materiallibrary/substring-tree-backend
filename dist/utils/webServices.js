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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PATCH = exports.GET = exports.PUT = exports.POST = void 0;
const axios_1 = __importDefault(require("axios"));
const POST = (URL, data = {}, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
});
exports.POST = POST;
const GET = (URL, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(URL, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
});
exports.GET = GET;
const PATCH = (URL, data, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.patch(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
});
exports.PATCH = PATCH;
const PUT = (URL, data, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.put(URL, data, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
});
exports.PUT = PUT;
const DELETE = (URL, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.delete(URL, options);
        return response;
    }
    catch (error) {
        return error.response;
    }
});
exports.DELETE = DELETE;
