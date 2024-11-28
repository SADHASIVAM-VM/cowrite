const multer = require("multer");
const express = require("express")
const router = express.Router();
const path = require("path")

const Storage = multer.diskStorage({destination:(req, file, cb)=>{
    cb(null, 'uploads/')
},
filename:(req, file, cb)=>{
    cb(null, Date.now()+path.extname(file.originalname));
}})

const upload = multer({storage:Storage});


router.post('/', upload.single('file'), (req, res)=>{
    if(!req.file){
        res.status(400).json({msg: "Sorry No File Found"})
    }
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
})

module.exports = router;