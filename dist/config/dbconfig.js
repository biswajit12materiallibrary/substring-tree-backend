"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectDatabase {
    constructor(uriString) {
        this.uriString = uriString;
        this.uriString = uriString;
    }
    async connectDB() {
        try {
            await mongoose_1.default.set("strictQuery", true);
            const conn = await mongoose_1.default.connect(this.uriString, {
                serverSelectionTimeoutMS: 5000,
            });
            console.log(`MongoDB Connected`);
        }
        catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    }
}
exports.ConnectDatabase = ConnectDatabase;
