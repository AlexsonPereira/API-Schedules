import { Request, Response } from "express"
import { createSchedulesMakeService } from "../services/schedules/createSchedulesMake.service"
import { listSchedulesMarkedService } from "../services/schedules/listSchedulesMarked.service"

export const createSchedulesMakeController = async (req:Request, res:Response) => {
   const idUser = req.user.id
   const body = req.body
   const created = await createSchedulesMakeService(body,idUser)
   return res.status(204).json({created})

}

export const listSchedulesMarkedController = async (req:Request, res:Response) => {
   const list = await listSchedulesMarkedService()
   return res.status(200).json(list)

}