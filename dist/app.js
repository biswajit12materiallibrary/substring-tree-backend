"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dbconfig_1 = require("./config/dbconfig");
const configEnv_1 = require("./config/configEnv");
const rateLimiter_1 = require("./middleware/rateLimiter");
const allFileServicesRoute_1 = require("./routes/allFileServicesRoute");
const swagger_1 = require("./swaggerConfig/swagger");
const swaggerUi = require("swagger-ui-express");
const port = (configEnv_1.config === null || configEnv_1.config === void 0 ? void 0 : configEnv_1.config.PORT) || 8010;
const env = (configEnv_1.config === null || configEnv_1.config === void 0 ? void 0 : configEnv_1.config.NODE_ENV) || "development";
exports.app = (0, express_1.default)();
new dbconfig_1.ConnectDatabase((configEnv_1.config === null || configEnv_1.config === void 0 ? void 0 : configEnv_1.config.MONGO_URI_USER) ||
    "mongodb+srv://biswajitmateriallibrary:biswajit@cluster0546.ffxbwii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0546").connectDB(); // Calling db connection
exports.app.use((0, helmet_1.default)());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use(express_1.default.json({ limit: "500mb" }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, cors_1.default)());
exports.app.options("*", (0, cors_1.default)());
exports.app.use(rateLimiter_1.rateLimiter);
exports.app.get("/", (req, res) => {
    console.log("backend running successfully");
    res.send("backend running successfully");
}); // creating api endpoint
exports.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger_1.swaggerDocs));
exports.app.use("/api", allFileServicesRoute_1.allFileServicesRouter);
exports.app.listen(port, () => {
    console.log(`Env: ${env} => Server Listening on http://localhost:${port}`);
});
