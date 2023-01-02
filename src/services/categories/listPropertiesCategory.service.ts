import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../errors/AppError"

export const listPropertiesCategoryService = async (idCategory:string) => {
   const categoryRepo = AppDataSource.getRepository(Categories)
   
   const listCategories = await categoryRepo.findOne({
      where : {
         id : idCategory
      },
      relations : {
         properties : true
      }
   })

   if(!listCategories){
      throw new AppError("Id Invalid",404)
   }

   return listCategories
}