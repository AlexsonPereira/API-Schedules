import { Router } from "express";
import { createSchedulesMakeController, listSchedulesMarkedController } from "../controllers/schedules.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewar";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { schedulesCreateSerializer } from "../serializer/schedules.serializer";

export const scheduleRoute = Router()

scheduleRoute.post('',verifyAuthMiddleware, ensureDataIsValidMiddleware(schedulesCreateSerializer) , createSchedulesMakeController)
scheduleRoute.get('/properties/:id', verifyAuthMiddleware,listSchedulesMarkedController)