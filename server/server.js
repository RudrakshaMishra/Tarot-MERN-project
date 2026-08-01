import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

//Create Express app and HTTP server
const app = express();
const server = http.createServer(app)

//Initialize socket.io server
export const io = new Server(server,{
    cors: {origin: "*"}
})

//Store Online Users
export const userSocketMap = {}; // {userId: socketId}

//Socket.io connection handler
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("user Connected", userId);

    if(userId){userSocketMap[userId] = socket.id;}

    //Emit online user to all connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect", ()=>{
        console.log("User Disconneted");
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

//Middleware setup
//app.use(express.json({limit: "4mb"}));
//
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
//
app.use(cors({
    origin: "https://tarot-mern-project.vercel.app",
    credentials: true
}));

//Routes setup
app.use("/api/status",(req,res)=> res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages",messageRouter);

//Connect to MongoDB
 await connectDB();

if(process.env.NODE_ENV !== "production"){const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log("Server is running on PORT: "+ PORT));}

//Export server for vercel
export default server;