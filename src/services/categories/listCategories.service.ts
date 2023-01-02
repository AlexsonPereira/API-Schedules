import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"

export const listCategoriesService = async () => {
   const categoryRepo = AppDataSource.getRepository(Categories)
   const list = await categoryRepo.find()
   return list 
}