import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IUserUpdate } from "../../interfaces/users"
import { responseUserSerializer } from "../../serializer/users.serializer"

export const editUserService = async (isAdm : boolean,id : string, idUser : string, body :IUserUpdate) => {
   

   const userRepo = AppDataSource.getRepository(User)

   const userEdit = await userRepo.findOneBy({
      id: id
   })

   if(!userEdit){
      throw new AppError("User not Found", 404)
   }

   if(!isAdm  && id !== idUser){
      throw new AppError("You not authorization", 401)
   }

   if(!userEdit.isActive){
      throw new AppError("User inative", 401)
   }

   await userRepo.save({
      ...userEdit,
      ...body
   })

   const userEdited = await userRepo.findOneBy({
      id : id
   })
      
   const userWithoutPass = await responseUserSerializer.validate(userEdited,{
      stripUnknown: true
   })
   
   return userWithoutPass
}