import { Router } from "express";
import { createUserController, deleteUserController, editUserController, listUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewar";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";
import { createUserSerializer, editUserSerializer } from "../serializer/users.serializer"

export const userRoute = Router()

userRoute.post('', ensureDataIsValidMiddleware(createUserSerializer), createUserController)
userRoute.get('', verifyAuthMiddleware, listUserController)
userRoute.patch('/:id', verifyAuthMiddleware, ensureDataIsValidMiddleware(editUserSerializer), editUserController)
userRoute.delete('/:id', verifyAuthMiddleware, deleteUserController)
