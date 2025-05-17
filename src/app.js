import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer";


const app = express()
const getfeilds = multer();

app.use(cors(
{
    origin:process.env.CORS_ORIGIN,
    credentials: true,
}
))

// app.use(getfeilds.any())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import router from "./routers/user.routes.js";


// app.use("/api/v1/Bobby/chatApp/users",userRouter)
app.use("/api/v1/Bobby/chatApp/users",router)

export { app }

//http://localhost:8000/api/v1/Bobby/chatApp/users/register