import { Request, Response } from "express"
import { createPropertiesService } from "../services/properties/createProperties.service"
import { listPropertiesService } from "../services/properties/listProperties.service"

export const createPropertiesController = async (req:Request, res:Response) => {
   const created = await createPropertiesService(req.body,req.user.isAdm)
   return res.status(201).json(created)
}
export const listPropertiesController = async (req:Request, res:Response) => {
   const list = await listPropertiesService()
   return res.status(200).json(list)
}