"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTree = exports.substring = exports.login = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonToken_1 = require("../utils/jsonToken");
const substring_1 = require("../utils/substring");
const binarytree_1 = require("../utils/binarytree");
const calculator_1 = __importDefault(require("../model/calculator"));
const createUser = async (req) => {
    try {
        const { email, role, password } = req;
        const existingUser = await userModel_1.default.findOne({ email });
        if (existingUser) {
            throw new Error("Email already exists");
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const createUser = await userModel_1.default.create({
            password: hashedPassword,
            role: role || "user",
            email: email,
        });
        if (!createUser) {
            throw new Error("Signup failed");
        }
        return {
            success: true,
            data: {},
            message: "Sign Up Successfully",
            statusCode: 200,
        };
    }
    catch (err) {
        return {
            success: false,
            data: {},
            message: err.message,
            statusCode: 404,
        };
    }
};
exports.createUser = createUser;
const login = async (req) => {
    try {
        const { email, password } = req;
        const existingUser = await userModel_1.default.findOne({ email, isDeleted: false });
        if (!existingUser) {
            throw new Error("Email does not exists");
        }
        const isMatch = await bcrypt_1.default.compare(password, existingUser.password);
        if (!isMatch) {
            throw new Error("Invalid Password");
        }
        let payload = {
            userId: existingUser._id,
            email: existingUser.email,
            role: existingUser.role,
            isLogin: true,
        };
        return {
            success: true,
            data: {
                email: existingUser.email,
                token: (0, jsonToken_1.generateToken)(payload),
                isLogin: true,
            },
            message: "Login Successfully",
            statusCode: 200,
        };
    }
    catch (err) {
        return {
            success: false,
            data: {},
            message: err.message,
            statusCode: 404,
        };
    }
};
exports.login = login;
const substring = async (req) => {
    try {
        const { input } = req.body;
        if (!input || typeof input !== "string") {
            throw new Error("Invalid input. Please provide a valid string.");
        }
        const longestSubstring = (0, substring_1.findLongestSubstring)(input);
        const uniqueSubstrings = (0, substring_1.findUniqueSubstrings)(input);
        await calculator_1.default.create({
            userId: req.user.userId,
            input: input,
            result: { longestSubstring, uniqueSubstrings },
            type: "substring",
        });
        return {
            success: true,
            data: { longestSubstring, uniqueSubstrings },
            message: "output get success",
            statusCode: 200,
        };
    }
    catch (err) {
        return {
            success: false,
            data: {},
            message: err.message,
            statusCode: 404,
        };
    }
};
exports.substring = substring;
const binaryTree = async (req) => {
    try {
        const { tree } = req.body;
        if (!tree || !Array.isArray(tree)) {
            throw new Error("Invalid input. Please provide a valid binary tree array.");
        }
        // Convert the array input into a binary tree structure
        const binaryTree = (0, binarytree_1.buildBinaryTreeFromArray)(tree);
        console.log(JSON.stringify(binaryTree));
        const maxLeafPath = (0, binarytree_1.maxSumPathFromLeaf)(binaryTree);
        const maxAnyNodePath = (0, binarytree_1.maxSumPathAnyNode)(binaryTree);
        await calculator_1.default.create({
            userId: req.user.userId,
            input: tree,
            result: { maxLeafPath, maxAnyNodePath },
            type: "binary-tree",
        });
        return {
            success: true,
            data: { maxLeafPath, maxAnyNodePath },
            message: "output get success",
            statusCode: 200,
        };
    }
    catch (err) {
        console.log(err);
        return {
            success: false,
            data: {},
            message: err.message,
            statusCode: 404,
        };
    }
};
exports.binaryTree = binaryTree;
