import { Request, Response } from "express"
import { createCategoryService } from "../services/categories/createCategory.service"
import { listCategoriesService } from "../services/categories/listCategories.service"
import { listPropertiesCategoryService } from "../services/categories/listPropertiesCategory.service"

export const createCategoryController = async (req:Request, res:Response) => {
  const created = await createCategoryService(req.body, req.user.isAdm)
   return res.status(201).json(created)
}
export const listCategoryPropertiesController = async (req:Request, res:Response) => {
   const list = await listPropertiesCategoryService(req.params.id)
   return res.status(200).json(list)
}

export const listCategoryController = async (req:Request, res:Response) => {
   const categories = await listCategoriesService()
   return res.status(200).json(categories)
}