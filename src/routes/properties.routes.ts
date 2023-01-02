import { Router } from "express";
import { createPropertiesController, listPropertiesController } from "../controllers/properties.controllers";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";

export const propertieRoute = Router()

propertieRoute.post('',verifyAuthMiddleware,createPropertiesController)
propertieRoute.get('',listPropertiesController)

