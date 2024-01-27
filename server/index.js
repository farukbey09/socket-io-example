const express = require("express")
const cors = require("cors")
const mongoose=require("mongoose")
require("dotenv").config()
const userRouter=require("./Routes/userRoute")
const chatRouter=require("./Routes/chatRoute")
const messageRouter=require("./Routes/messageRoute")


const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/users",userRouter)
app.use("/api/chats",chatRouter)
app.use("/api/messages",messageRouter)


app.get("/",(req,res)=>{
    res.send("welcome to my app");
})

const port = process.env.PORT || 5000
app.listen(port, (req, res) => {
    console.log(`Server running on port:${port}`);
})
mongoose.connect(process.env.MONGO_URI).
then(()=>console.log("db connection is succesfully")).
catch((err)=>{console.log(err);})