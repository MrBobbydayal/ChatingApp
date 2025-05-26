import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer";


const app = express()
const getfeilds = multer();

app.use(cors(
{
    origin:"http://localhost:5173",
    
    credentials: true,
}
))



// app.use(getfeilds.any())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())





import Userrouter from "./routers/user.routes.js";
// app.use("/api/v1/Bobby/chatApp/users",userRouter)
app.use("/api/v1/Bobby/chatApp/users",Userrouter);

import Messagerouter from "./routers/message.routes.js"
app.use("/api/v1/Bobby/chatApp/messages",Messagerouter);

import Chatuserrouter from "./routers/chatUser.routers.js"
app.use("/api/v1/Bobby/chatApp/chatUser",Chatuserrouter);

export { app }

//http://localhost:8000/api/v1/Bobby/chatApp/users/register