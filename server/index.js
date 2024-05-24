const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/userRoute')

const server = express();

// =============== MIDDLEWARES CONNECT ================
server.use(cors())
server.use(express.json())

// ======= dotenv =============
dotenv.config();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;


// ========== CONNECT ROUTE FROM ROUTES FOLDER ========
server.use("/", userRouter.Router);

// ================ DATABASE CONNECT ==================
mongoose.connect(URL).then(()=>{

    console.log("DB connected...")
    server.listen(PORT, ()=>{
        console.log("server Started...")
    })

}).catch(error => console.log(error))




