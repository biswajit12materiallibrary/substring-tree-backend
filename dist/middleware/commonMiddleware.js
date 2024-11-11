"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRouteFuctionMiddleware = exports.nextMiddleware = void 0;
// import { Request } from "../interface/user";
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
function nextMiddleware(req, res, next, middlewares, index) {
    if (index >= middlewares.length)
        return next(); // End of middlewares, move to next
    middlewares[index](req, res, (err) => {
        if (err)
            return next(err); // If any error occurs, pass it to the error handler
        nextMiddleware(req, res, next, middlewares, index + 1); // Move to the next middleware
    });
}
exports.nextMiddleware = nextMiddleware;
const allRouteFuctionMiddleware = (middlewareObj) => {
    return (req, res, next) => {
        var _a, _b, _c, _d;
        let downloadKey = ((_b = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.endpointKey) === null || _b === void 0 ? void 0 : _b.toUpperCase()) ||
            ((_d = (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.downloadKey) === null || _d === void 0 ? void 0 : _d.toUpperCase()) ||
            "";
        if (!middlewareObj[downloadKey]) {
            (0, statusCodeResponse_1.sendResponse)(req, res, 404, {
                success: false,
                error: "Invalid api key",
                data: {},
                statusCode: 404,
            });
        }
        // Dynamically extract middlewares based on the downloadKey
        const oneObjForApiBykey = middlewareObj[downloadKey];
        // Apply the middleware chain dynamically
        return nextMiddleware(req, res, next, oneObjForApiBykey, 0);
    };
};
exports.allRouteFuctionMiddleware = allRouteFuctionMiddleware;
