const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors")
const db = require("./util/MongoDB");
const morgan = require("morgan");
const logger  = require("./middleware/MorganLogs");
require('dotenv').config({path:path.join(__dirname,"config",".env")})


  
  // Dynamic origin function
  const corsOptions = {
    origin: function (origin, callback) {
      // Check if the incoming origin is in the list of allowed origins
      if (origin = process.env.URLs  || !origin) {
        callback(null, true); // Allow request
      } else {
        callback(new Error('Not allowed by CORS')); // Block request
      }
    },
  };
  
  // Apply the CORS middleware
  app.use(cors(corsOptions));
app.use(morgan('combined',{stream:logger}))
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"10mb", extended:true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
db()

app.use('/upload', require('./route/imageUpload'))
app.use('/ips', require('./route/IIPsRoute'))
app.use('/post', require('./route/blog_CRUD'))
app.use('/reaction', require('./route/likeCmnt'))
app.use('/user', require('./route/users'))
app.use('/save', require('./route/SaveRoute'));

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server working in port ", PORT)
})
