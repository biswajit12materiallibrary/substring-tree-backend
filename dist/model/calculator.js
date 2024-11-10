"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const calculationSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    input: {},
    result: {},
    type: { type: String, enum: ["substring", "binary-tree"] },
}, {
    timestamps: true,
    versionKey: false,
    strict: false,
});
exports.default = mongoose_1.default.model("Calculation", calculationSchema);
