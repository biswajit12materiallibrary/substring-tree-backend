import {
  CreateUserRequest,
  CustomRequest,
  deleteUserI,
  loginUserRequest,
  MyUserRequest,
  setDefaultValues,
  updateUserI,
} from "../interface/user";
import UserSchema from "../model/userModel";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jsonToken";
import mongoose, { ObjectId } from "mongoose"; // Correct import
import { findLongestSubstring, findUniqueSubstrings } from "../utils/substring";
import { Request, Response } from "express";
import {
  buildBinaryTreeFromArray,
  maxSumPathAnyNode,
  maxSumPathFromLeaf,
} from "../utils/binarytree";
import calculationSchema from "../model/calculator";
import { CustomUserRequest } from "../middleware/commonMiddleware";

export const createUser = async (req: CreateUserRequest) => {
  try {
    const { email, role, password } = req;

    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await UserSchema.create({
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
  } catch (err: any) {
    return {
      success: false,
      data: {},
      message: err.message,
      statusCode: 404,
    };
  }
};
export const login = async (req: loginUserRequest) => {
  try {
    const { email, password } = req;

    const existingUser = await UserSchema.findOne({ email, isDeleted: false });
    if (!existingUser) {
      throw new Error("Email does not exists");
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
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
        token: generateToken(payload),
        isLogin: true,
      },
      message: "Login Successfully",
      statusCode: 200,
    };
  } catch (err: any) {
    return {
      success: false,
      data: {},
      message: err.message,
      statusCode: 404,
    };
  }
};

export const substring = async (req: CustomUserRequest) => {
  try {
    const { input } = req.body as { input: string };
    if (!input || typeof input !== "string") {
      throw new Error("Invalid input. Please provide a valid string.");
    }
    const longestSubstring = findLongestSubstring(input);
    const uniqueSubstrings = findUniqueSubstrings(input);
    await calculationSchema.create({
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
  } catch (err: any) {
    return {
      success: false,
      data: {},
      message: err.message,
      statusCode: 404,
    };
  }
};

export const binaryTree = async (req: CustomUserRequest) => {
  try {
    const { tree } = req.body as { tree: (number | null)[] };
    if (!tree || !Array.isArray(tree)) {
      throw new Error(
        "Invalid input. Please provide a valid binary tree array."
      );
    }
    // Convert the array input into a binary tree structure
    const binaryTree = buildBinaryTreeFromArray(tree);
    console.log(JSON.stringify(binaryTree));
    const maxLeafPath = maxSumPathFromLeaf(binaryTree);
    const maxAnyNodePath = maxSumPathAnyNode(binaryTree);

    await calculationSchema.create({
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
  } catch (err: any) {
    console.log(err);
    return {
      success: false,
      data: {},
      message: err.message,
      statusCode: 404,
    };
  }
};
