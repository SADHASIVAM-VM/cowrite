const express = require("express");
const postModel = require("../model/postModel");
const router = express.Router()

router.get('/:user', async(req,res)=>{
    const {user} = req.params;
    try{
        const match_user = await postModel.find({user_id:user})
    
        if(!match_user){
          return res.status(400).json({err:'Enter Vaild user'})
        }
        return res.status(200).json({data: match_user})
    }
    catch(err){
        res.status(400).json({err:'Something Wrong'})
    }
})

module.exports = router;