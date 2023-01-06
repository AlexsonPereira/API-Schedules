import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedule } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequestBody } from "../../interfaces/schedules";
import { categoryRoute } from "../../routes/categories.routes";

export const createSchedulesMakeService = async (body:IScheduleRequestBody, idUser:string) => {
   // const schedulesRepo = AppDataSource.getRepository(Schedule)
   // const propertiesRepo = AppDataSource.getRepository(Properties)
   // const userRepo = AppDataSource.getRepository(User)

   // const hours = +body.hour.split(":")[0]
   // const minutes = +body.hour.split(":")[1]

   // const propertieExists = await propertiesRepo.findOneBy({id : body.propertyId})
   // if(!propertieExists){
   //    throw new AppError("Propertie not exist", 404)
   // }

   // const user = await userRepo.findOneBy({id : idUser})

   // const scheduleCreate = schedulesRepo.create({
   //    date: body.date,
   //    hour: body.hour,
   //    property: propertieExists!,
   //    user: user!
   // })
   // console.log(scheduleCreate)

   // await schedulesRepo.save(scheduleCreate)

   return { message: "Schedule created"}
} 