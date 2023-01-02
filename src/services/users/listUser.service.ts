import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { responseReturnListUsers } from "../../serializer/users.serializer"

export const listUserService = async (isAdm:boolean) => {
   if(!isAdm){
      throw new AppError("Not authorization", 403)
   }

   const userRepo = AppDataSource.getRepository(User)

   const usersList = await userRepo.find({
   }
   )
   const listUsersWithoutPass = await responseReturnListUsers.validate(usersList,{
      stripUnknown: true
   })

   return listUsersWithoutPass
}