import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserRequest, IUserResponse, IUserUpdate } from '../interfaces/users'


export const createUserSerializer: SchemaOf<IUserRequest> = yup.object().shape({
   name: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().required(),
   isAdm : yup.boolean().required()
})

export const responseUserSerializer: SchemaOf<IUserResponse>  = yup.object().shape({
   name : yup.string().required(),
   email : yup.string().email().required(),
   createdAt : yup.date().required(),
   updatedAt : yup.date().required(),
   id : yup.string().required(),
   isAdm : yup.boolean().required(),
   isActive : yup.boolean().required()
})

export const editUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
   name: yup.string().notRequired(),
   email: yup.string().email().notRequired(),
   password : yup.string().notRequired()

})

export const responseReturnListUsers = yup.array(responseUserSerializer)