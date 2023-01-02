import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategoryService = async (body:ICategoryRequest, isAdm:boolean) => {

   if(!isAdm){
      throw new AppError("Not have permission",403)
   }

   const categoryRepo = AppDataSource.getRepository(Categories)
   
   
   const verifyExist = await categoryRepo.findOneBy({name:body.name})

   if(verifyExist != null){
      throw new AppError("category exists", 409)
   }

   const createCategory = categoryRepo.create(body)
   await categoryRepo.save(createCategory)

   return createCategory
}