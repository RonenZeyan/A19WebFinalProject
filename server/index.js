
// Import required modules
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


// Load environment variables like db url and port 
dotenv.config()
const port = process.env.PORT
const url = process.env.DATABASE_URL

// Initialize Express app
const app = express()

app.use(express.json()) // Use middleware to parse JSON requests

app.use(cors({   //give the access from frontEnd
    origin: ['http://localhost:3000', 'https://a19-web-final-project-team-management.vercel.app'],
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type','Authorization']
}));



app.use(express.static('public'));  
// mongoose.connect("mongodb://localhost:27017/UsersMissionsManagement")
//connect to mongodb in cloud 
mongoose.connect(url)



// Import routes
const allUserRouter = require('./routes/AllUserRoute')
const adminRouter = require('./routes/AdminRoute') 


// Use routes
app.use('/', allUserRouter )
app.use('/', adminRouter )


// Start the server
app.listen(port,()=>{
    console.log("server is running")
})