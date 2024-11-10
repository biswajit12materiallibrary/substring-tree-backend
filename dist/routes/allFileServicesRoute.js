"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFileServicesRouter = void 0;
const express_1 = require("express");
// import { MyUserRequest } from "";
const userApiMiddleware_1 = require("../apiMiddlewareFileService/userApiMiddleware");
const commonMiddleware_1 = require("../middleware/commonMiddleware");
const calculaterApiMiddleware_1 = require("../apiMiddlewareFileService/calculaterApiMiddleware");
exports.allFileServicesRouter = (0, express_1.Router)();
exports.allFileServicesRouter.post("/user/:endpointKey", (0, commonMiddleware_1.allRouteFuctionMiddleware)(userApiMiddleware_1.middlewaresUserObj));
exports.allFileServicesRouter.post("/user/output/:endpointKey", (0, commonMiddleware_1.allRouteFuctionMiddleware)(calculaterApiMiddleware_1.middlewaresCalculaterObj));
