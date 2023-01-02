import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoute } from "./routes/users.routes"
import { sessionRoute } from "./routes/session.routes"
import { categoryRoute } from "./routes/categories.routes"
import { propertieRoute } from "./routes/properties.routes"
import { scheduleRoute } from "./routes/schedules.routes"
import handleError from "./errors/handleError"


const app = express()
app.use(express.json())

app.use('/users',userRoute)
app.use('/login',sessionRoute)
app.use('/categories',categoryRoute)
app.use('/properties',propertieRoute)
app.use('/schedules',scheduleRoute)

app.use(handleError)



export default app