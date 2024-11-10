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
        let downloadKey = req?.params?.endpointKey?.toUpperCase() ||
            req?.body?.downloadKey?.toUpperCase() ||
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
