import { Router, Response, NextFunction, RequestHandler } from "express";
// import { MyUserRequest } from "";
import { middlewaresUserObj } from "../apiMiddlewareFileService/userApiMiddleware";
import { allRouteFuctionMiddleware } from "../middleware/commonMiddleware";
import { middlewaresCalculaterObj } from "../apiMiddlewareFileService/calculaterApiMiddleware";

export const allFileServicesRouter = Router();

allFileServicesRouter.post(
  "/user/:endpointKey",
  allRouteFuctionMiddleware(middlewaresUserObj)
);

allFileServicesRouter.post(
  "/user/output/:endpointKey",
  allRouteFuctionMiddleware(middlewaresCalculaterObj)
);
