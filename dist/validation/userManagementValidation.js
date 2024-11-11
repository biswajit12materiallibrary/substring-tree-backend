"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userManagementValidation = void 0;
const express_validator_1 = require("express-validator");
const statusCodeResponse_1 = require("../utils/statusCodeResponse");
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
exports.userManagementValidation = {
    baseAuth: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
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
    changePassword: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("oldPassword")
            .exists({ checkFalsy: true })
            .withMessage("Old Password Is Required")
            .isString()
            .withMessage("Old Password Is Text With Alph Numeric Combination")
            .isLength({ min: 8 })
            .withMessage("Old Password Must be at Least 8 Characters"),
        (0, express_validator_1.body)("newPassword")
            .exists({ checkFalsy: true })
            .withMessage("New Password Is Required")
            .isString()
            .withMessage("New Password Is Text With Alph Numeric Combination")
            .isLength({ min: 8, max: 12 })
            .withMessage("New Password  Must be 8 to 12 Characters")
            .custom((value) => {
            if (!passwordRegex.test(value)) {
                const errors = [];
                if (!/[A-Z]/.test(value)) {
                    errors.push("New Password Must have At Least One Capital Letter.");
                }
                if (!/[!@#$%^&*()_+\-=;':"|,.<>/?]+/.test(value)) {
                    errors.push("New Password Must contain At least One Special Character.");
                }
                if (!/[0-9]+/.test(value)) {
                    errors.push("New Password Must Contain At Least One Number.");
                }
                if (/\s/.test(value)) {
                    errors.push("New Password Must Not Contain Spaces.");
                }
                if (errors.length > 0) {
                    throw errors[0];
                }
            }
            return true;
        }),
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
    getAllUser: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("search").optional({ checkFalsy: true }).trim(),
        (0, express_validator_1.body)("skip").optional().isInt({ min: 0, max: 10000 }),
        (0, express_validator_1.body)("limit").optional().isInt({ min: 0, max: 10000 }),
        (0, express_validator_1.body)("pageNo").optional().isInt({ min: 0, max: 10000 }),
        (0, express_validator_1.body)("sort").optional(),
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
    substring: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("input")
            .exists({ checkFalsy: true })
            .withMessage("input is required")
            .isString()
            .withMessage("input Type String"),
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
    binaryTree: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("tree")
            .exists({ checkFalsy: true })
            .withMessage("tree is required")
            .isArray()
            .withMessage("tree should be an array")
            .custom((value) => {
            // Ensure that every element in the array is either null or a number
            if (!value.every((item) => item === null || typeof item === "number")) {
                throw new Error("Each item in tree must be either null or a number");
            }
            return true;
        }),
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
    getUser: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("skip").optional().isInt({ min: 0, max: 10000 }),
        (0, express_validator_1.body)("limit").optional().isInt({ min: 0, max: 10000 }),
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
    createUser: [
        (0, express_validator_1.body)("email")
            .exists({ checkFalsy: true })
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email should be a email format.")
            .isLength({ min: 5, max: 50 })
            .withMessage("Email should be min 5 and max 50 characters in length.")
            .trim()
            .toLowerCase(),
        (0, express_validator_1.body)("password")
            .exists({ checkFalsy: true })
            .withMessage("New Password Is Required")
            .isString()
            .withMessage("New Password Is Text With Alph Numeric Combination")
            .isLength({ min: 8, max: 16 })
            .withMessage("New Password  Must be 8 to 16 Characters")
            .custom((value) => {
            if (!passwordRegex.test(value)) {
                const errors = [];
                if (!/[A-Z]/.test(value)) {
                    errors.push("New Password Must have At Least One Capital Letter.");
                }
                if (!/[!@#$%^&*()_+\-=;':"|,.<>/?]+/.test(value)) {
                    errors.push("New Password Must contain At least One Special Character.");
                }
                if (!/[0-9]+/.test(value)) {
                    errors.push("New Password Must Contain At Least One Number.");
                }
                if (/\s/.test(value)) {
                    errors.push("New Password Must Not Contain Spaces.");
                }
                if (errors.length > 0) {
                    throw errors[0];
                }
            }
            return true;
        }),
        (0, express_validator_1.body)("role")
            .exists({ checkFalsy: true })
            .withMessage("role is Required")
            .isString()
            .withMessage("role should be a text format.")
            .trim()
            .toLowerCase()
            .custom((value) => {
            if (!["admin", "user"].includes(value)) {
                throw new Error("Invalid role Type");
            }
            return value;
        })
            .withMessage("role Type Should be admin or user"),
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
    createByAdminUser: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("email")
            .exists({ checkFalsy: true })
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email should be a email format.")
            .isLength({ min: 5, max: 50 })
            .withMessage("Email should be min 5 and max 50 characters in length.")
            .trim()
            .toLowerCase(),
        (0, express_validator_1.body)("password")
            .exists({ checkFalsy: true })
            .withMessage("New Password Is Required")
            .isString()
            .withMessage("New Password Is Text With Alph Numeric Combination")
            .isLength({ min: 8, max: 16 })
            .withMessage("New Password  Must be 8 to 16 Characters")
            .custom((value) => {
            if (!passwordRegex.test(value)) {
                const errors = [];
                if (!/[A-Z]/.test(value)) {
                    errors.push("New Password Must have At Least One Capital Letter.");
                }
                if (!/[!@#$%^&*()_+\-=;':"|,.<>/?]+/.test(value)) {
                    errors.push("New Password Must contain At least One Special Character.");
                }
                if (!/[0-9]+/.test(value)) {
                    errors.push("New Password Must Contain At Least One Number.");
                }
                if (/\s/.test(value)) {
                    errors.push("New Password Must Not Contain Spaces.");
                }
                if (errors.length > 0) {
                    throw errors[0];
                }
            }
            return true;
        }),
        (0, express_validator_1.body)("role")
            .exists({ checkFalsy: true })
            .withMessage("role is Required")
            .isString()
            .withMessage("role should be a text format.")
            .trim()
            .toLowerCase()
            .custom((value) => {
            if (!["admin", "user"].includes(value)) {
                throw new Error("Invalid role Type");
            }
            return value;
        })
            .withMessage("role Type Should be admin or user"),
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
    login: [
        (0, express_validator_1.body)("email")
            .exists({ checkFalsy: true })
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email should be a text format.")
            .isLength({ min: 5, max: 50 })
            .withMessage("Email should be min 5 and max 50 characters in length.")
            .trim()
            .toLowerCase(),
        (0, express_validator_1.body)("password")
            .exists({ checkFalsy: true })
            .withMessage("Password is Required")
            .isString()
            .withMessage("Password should be a text format.")
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
            .withMessage("Password should be alpha numeric 12 characters in length.")
            .trim(),
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
    updateUser: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("email")
            .optional({ checkFalsy: true })
            .isEmail()
            .withMessage("Email should be a text format.")
            .isLength({ min: 5, max: 50 })
            .withMessage("Email should be min 5 and max 50 characters in length.")
            .trim()
            .toLowerCase(),
        (0, express_validator_1.body)("userId")
            .exists({ checkFalsy: true })
            .withMessage("User Id is required")
            .isString()
            .withMessage("User Id is String type"),
        (0, express_validator_1.body)("role")
            .optional({ checkFalsy: true })
            .isString()
            .withMessage("Role must be a string")
            .toLowerCase()
            .custom((value) => {
            if (!["admin", "user"].includes(value)) {
                throw new Error("Invalid role Type");
            }
            return value;
        })
            .withMessage("role Type Should be admin or user"),
        (0, express_validator_1.body)("name")
            .optional({ checkFalsy: true })
            .isString()
            .withMessage("Name must be a string")
            .isLength({ min: 1 })
            .withMessage("Name cannot be empty"),
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
    deleteuser: [
        (0, express_validator_1.check)("authorization")
            .exists({ checkFalsy: true })
            .withMessage("Please Provide Your Token")
            .customSanitizer((value) => value === null || value === void 0 ? void 0 : value.split(" ")[1])
            .isJWT()
            .withMessage("token is not valid"),
        (0, express_validator_1.body)("email")
            .exists({ checkFalsy: true })
            .withMessage("Email is Required")
            .isEmail()
            .withMessage("Email should be a text format.")
            .isLength({ min: 5, max: 50 })
            .withMessage("Email should be min 5 and max 50 characters in length.")
            .trim()
            .toLowerCase(),
        (0, express_validator_1.body)("password")
            .exists({ checkFalsy: true })
            .withMessage("Password is Required")
            .isString()
            .withMessage("Password should be a text format.")
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
            .withMessage("Password should be alpha numeric 12 characters in length.")
            .trim(),
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
