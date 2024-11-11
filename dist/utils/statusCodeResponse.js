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
exports.sendResponse = void 0;
const logModel_1 = __importDefault(require("../model/logModel"));
function sendResponse(req, res, statusCode, data, Log) {
    return __awaiter(this, void 0, void 0, function* () {
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
        yield logModel_1.default.create(Log);
        return res.status(statusCode).send(data);
        // }
        // return res.status(statusCode).send(data);
    });
}
exports.sendResponse = sendResponse;
