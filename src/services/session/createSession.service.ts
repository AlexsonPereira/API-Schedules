import { compare } from "bcrypt"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IUserLogin } from "../../interfaces/users"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const createSessionService = async ({email,password}:IUserLogin) => {
   password = password + ""

   const userRepo = AppDataSource.getRepository(User)

   const userLogin = await userRepo.findOneBy({
      email : email
   })
   
   if(!userLogin){
      throw new AppError('Email or password invalid', 403)
  }

  if(!userLogin.isActive){
   throw new AppError('Account is invalid', 400)
}

  const passwordValid = await compare(password, userLogin.password)

  if(!passwordValid){
   throw new AppError("Email or password invalid", 403)
  }

  const token = jwt.sign(
   {
      isAdm : userLogin.isAdm
   
   },
   "SECRET_KEY",
   {
      subject: userLogin.id + "",
      expiresIn : '24h'

   }
   )

   return token
}