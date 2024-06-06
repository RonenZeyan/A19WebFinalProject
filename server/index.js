const express = require("express") //use for node js 
const mongoose = require("mongoose") //used mongoose for mongodb
const cors = require("cors")
//the models of db 
const UserModel = require('./models/Users')
const dotenv = require('dotenv')

const MissionModel = require('./models/Missions')
const MsgModel = require('./models/MSG')
const bcrypt = require('bcrypt');  //we was want to use for hash the passwords but i dont know why its not working in my computer 
const jwt = require('jsonwebtoken');  //used for token
const multer = require('multer');  //used for save uploaded pictures

dotenv.config()
const port = process.env.PORT
const url = process.env.DATABASE_URL

const app = express()
app.use(express.json())
app.use(cors({   //give the access from frontEnd
    origin: ['http://localhost:3000', 'https://final-project-a19-frontend.vercel.app'],
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.static('public'));  
// mongoose.connect("mongodb://localhost:27017/UsersMissionsManagement")
//connect to mongodb in cloud 
mongoose.connect(url)





const allUserRouter = require('./routes/AllUserRoute')
const adminRouter = require('./routes/AdminRoute') 

app.use('/', allUserRouter )
app.use('/', adminRouter )

app.listen(port,()=>{
    console.log("server is running")
})