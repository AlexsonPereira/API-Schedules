import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

export const deleteUserService = async (isAdm:boolean, id:string) => {
   if(!isAdm){
      throw new AppError("not acess", 403)
   }

   const userRepo = AppDataSource.getRepository(User)

   const user:any = await userRepo.findOneBy({
      id : id
   })

   if(!user){
      throw new AppError("User not Found", 404)
   }

   if(user.isActive == false){
      throw new AppError("User is not found", 400)
   }

   user.isActive = false
   await userRepo.save(user)
}