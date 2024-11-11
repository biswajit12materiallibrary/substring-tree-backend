"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseValidation = void 0;
const express_validator_1 = require("express-validator");
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
exports.baseValidation = {
    baseAuth: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value?.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (req, res, next) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty())
                return (0, statusCodeResponse_1.sendResponse)(req, res, 200, {
                    success: false,
                    data: {},
                    message: errors.errors[0].msg,
                    statusCode: 422,
                });
            next();
        },
    ],
};
