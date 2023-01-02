import { Request, Response, Router } from "express";
import { createCategoryController, listCategoryController, listCategoryPropertiesController } from "../controllers/categories.controller";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";

export const categoryRoute = Router()

const ap = (req:Request, res:Response) => {
   return res.status(200).json({message : "oi"})
}

categoryRoute.post('',verifyAuthMiddleware, createCategoryController)
categoryRoute.get('/:id/properties',listCategoryPropertiesController)
categoryRoute.get('', listCategoryController)


