const router = require("express").Router();
const Req = require("../models/Request");

router.post("/add",async (req,res)=>{
    try{
        const data = {
            name: req.body.name,
            address:req.body.address,
            city:req.body.city,
            area:req.body.area,
            state:req.body.state,
            email:req.body.email,
            lat:req.body.lat,
            lng:req.body.lng,
        }
        const newReq = new Req(data);
        const requests = await newReq.save();
        res.status(200).json(requests);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

router.get("/all",async(req,res)=>{
    try{
        let requests ;
        requests = await Req.find();
        res.status(200).json(requests);
} catch (err) {
    console.log(err)
        res.status(500).json(err);
}
})
module.exports = router ;