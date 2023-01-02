import { Router } from "express";
import { createSchedulesMakeController, listSchedulesMarkedController } from "../controllers/schedules.controllers";

export const scheduleRoute = Router()

scheduleRoute.post('',createSchedulesMakeController)
scheduleRoute.get('/properties/:id',listSchedulesMarkedController)