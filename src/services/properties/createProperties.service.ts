import AppDataSource from "../../data-source"
import { Adress } from "../../entities/adress.entity"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest } from "../../interfaces/properties"

export const createPropertiesService = async (body:IPropertyRequest, isAdm:boolean) => {

   if(!isAdm){
      throw new AppError("Not have permission",403)
   }

   const categoryRepo = AppDataSource.getRepository(Categories)
   const categoryExist = categoryRepo.findBy({id : body.categoryId})

   if(categoryExist == null){
      throw new AppError("Not have permission",404)
   }

   const propRepo = AppDataSource.getRepository(Properties)
   const adressRepo = AppDataSource.getRepository(Adress)

   const propertieExist = propRepo.findBy({id : body.categoryId})

   if(propertieExist != null){
      throw new AppError("Not have permission",409)
   }

   const adressCreated = adressRepo.create(body.address)
   await adressRepo.save(adressCreated)

   const bodyWithAdress:any = body 
   bodyWithAdress.adress = adressCreated.id

   const propertieCreated = propRepo.create({
      ...bodyWithAdress,
   })
   await propRepo.save(propertieCreated)

   return propertieCreated
}