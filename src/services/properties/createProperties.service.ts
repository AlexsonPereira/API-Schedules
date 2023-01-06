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
   const categoryExist = await categoryRepo.findOneBy({id : body.categoryId})

   if(!categoryExist){
      throw new AppError("Not have permission",404)
   }

   const propRepo = AppDataSource.getRepository(Properties)
   const adressRepo = AppDataSource.getRepository(Adress)

   const adressExist = await adressRepo.findOneBy({number : body.address.number, zipCode : body.address.zipCode})

   if(body.address.state.length > 2){
      throw new AppError("Invalid zip state",400)
   }

   if(body.address.zipCode.length > 8){
      throw new AppError("Invalid zip code",400)
   }
   
   if(adressExist !== null){
      throw new AppError("Not have permission",409)
   }

   const adressCreated = adressRepo.create(body.address)
   
   await adressRepo.save(adressCreated)

   const propertieCreated = propRepo.create({
      size: body.size,
      value : body.value,
      address: adressCreated,
      category : categoryExist

   })
   await propRepo.save(propertieCreated)

   return propertieCreated
}