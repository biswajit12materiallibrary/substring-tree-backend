"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Biostate API",
            version: "1.0.0",
            description: "API for assingment",
        },
        servers: [{ url: "http://localhost:8010" }],
        components: {
            securitySchemes: {
                userAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description: "JWT for user authentication",
                },
                adminAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description: "JWT for admin authentication",
                },
            },
        },
    },
    apis: ["./src/swaggerConfig/*.ts"],
};
exports.swaggerDocs = swaggerJsDoc(swaggerOptions);
