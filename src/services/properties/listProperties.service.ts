import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"

export const listPropertiesService = async () => {
   const propRepo = AppDataSource.getRepository(Properties)

   const list = await propRepo.find({
      relations : {
         adress : true
      }}
   )

   console.log(list)

   return list
}