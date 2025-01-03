const express = require("express")
const router = express.Router();
const III = require("../model/IIPs")


router.get('/',async(req, res)=>{
    const {checkmate} = req.query;
    try{
        if(checkmate === "4545"){
           const result = await III.find({})
            return  res.send(result)
        }
        else{
            return "##_$843"
        }
       
    } 
    catch(err){
        //console.log(err)
    }
})

router.post('/getiips',async(req, res)=>{

   try{
    const { name,ip } = req.body;
    if(ip){
        const addpps = new III ({
            user_name:name,
            IP:ip
    })
    await addpps.save();
    //console.log(addpps)
    }

   }
   catch(err){
    //console.log(err)
   }

})

module.exports = router;