const express = require("express");
const SaveModel = require("../model/saveBlog");
const postModel = require("../model/postModel")
const router = express.Router();


router.get("/allsave",async (req, res)=>{
    const allSavedBlogs = await SaveModel.find({});
    if(allSavedBlogs != ""){
       return res.status(200).json({data:"Saved Items : ",allSavedBlogs} )
    }
    else{
        return res.status(400).send("no saved Blogs")
    }
})
// based user saved blogs
router.get("/:id", async(req, res)=>{
    const {id} = req.params;
    const SaveByUser =await SaveModel.find({user_id:id}).populate("saveBlogId");
//  console.log(SaveByUser)
    try{
        
        if(SaveByUser.length > 0){
            return res.status(200).json({data : SaveByUser})
        }
         else{
             return res.status(400).json("No Items Founded")
        }
    }
    catch(err){
        return res.status(500).json({msg:"SaveByUser isn't finded", err:err});
    }}

)

router.post("/", async (req, res)=>{
   const {user_id,saveBlogId,star} = req.body
   const existingSave = await SaveModel.findOne({user_id:user_id,saveBlogId:saveBlogId});

   try{
    if(existingSave){
        return res.status(400).json({msg:"already exist !"})
    }
    const addFav = new SaveModel({
        user_id,saveBlogId,star
    })
    const newFav = await addFav.save();

    if(newFav){
        console.log(newFav)
        return res.status(200).json({msg:"succesfully saved Blog",data:newFav})

    }
    else{
        return res.status(400).json({msg:"Un-succesfully while saving"})
    }
   }
   catch(err){
    return res.status(500).json({msg:"internal server error"})
   }
   }
)



router.delete('/delete',async(req, res)=>{
    const {pass}= req.query;
    try{
        if(pass == "sadha"){
            console.log("deleted")
            await SaveModel.deleteMany({})
            return res.status(200).json({ msg: 'deleted all' });


        }
        return res.status(403).json({ msg: 'Invalid password' });
    }
    catch(err){
        console.log("err")
    }
    
   })

   router.delete('/:id',async (req, res)=>{
    const {id} = req.params;
    const {user_id} = req.query;
    console.log(user_id)
    
    try{
        if(!user_id){
            return res.status(400).json({msg:"Error while unsave"})
        }
        await SaveModel.findOneAndDelete({saveBlogId:id,user_id:user_id})
        return res.status(200).json({msg:"UnSaved"})
    }

    catch(err){
       
            return res.status(400).json({msg:"Something wrong while Un Save"})
    }


   })

module.exports = router;