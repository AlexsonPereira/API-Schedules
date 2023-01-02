import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";

export const sessionRoute = Router()

sessionRoute.post('',createSessionController)