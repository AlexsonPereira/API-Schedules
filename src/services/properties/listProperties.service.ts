import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { Properties } from "../../entities/properties.entity"

export const listPropertiesService = async () => {
   const propRepo = AppDataSource.getRepository(Properties)

   const list = await propRepo.find({
      relations : {
         address : true,
         category : true
      }}
   )

   return list
}