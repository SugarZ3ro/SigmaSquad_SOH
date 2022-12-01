const router = require("express").Router();
const nft = require("../models/nft");

router.post("/add",async (req,res)=>{
    try{
        const newNft = new nft( 
            {
                username:"ashish",
                count:0
            }
        );
        const rep = await newNft.save();
        res.status(200).json(rep);
    }catch(err){
        res.status(500).json(err);

    }
});
router.get("/all",async(req,res)=>{
    try{
        let reps ;
        reps = await nft.findOne({username:"ashish"});
    console.log("req got")
    res.status(200).json(reps);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router ;