import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"

export const listPropertiesCategoryService = async () => {
   const categoryRepo = AppDataSource.getRepository(Categories)
   
   const listCategories = categoryRepo.find({
      relations : {
         properties : true
      }
   })

   console.log()

   return listCategories
}