"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const logModel_1 = __importDefault(require("../model/logModel"));
async function sendResponse(req, res, statusCode, data, Log) {
    // if (Log) {
    Log = {
        eventRecord: {
            body: req.body,
            params: req.params,
            auth: req.headers.authorization,
            query: req.query,
            userDetails: req.user,
            res: data,
        },
    };
    await logModel_1.default.create(Log);
    return res.status(statusCode).send(data);
    // }
    // return res.status(statusCode).send(data);
}
exports.sendResponse = sendResponse;
