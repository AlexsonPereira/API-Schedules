import * as yup from "yup" 
import { SchemaOf } from "yup";
import { IScheduleRequestBody } from "../interfaces/schedules";

export const schedulesCreateSerializer: SchemaOf<IScheduleRequestBody> = yup.object().shape({
   propertyId: yup.string().required(),
   date: yup.string().required(),
   hour: yup.string().required()
})