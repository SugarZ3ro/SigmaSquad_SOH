const router = require("express").Router();

const QR = require("../models/QR");


router.get('/verify',async (req,res)=>{
    try{
        const newQR = new QR( {
            pid:req.query.pid,
            pCompany:req.query.pCompany,
            pType:req.query.pType
        });
        // const findQr = QR.findOne({pid:"rcm5644"})
        let stat = null;
        let sent = null;
         QR.findOneAndDelete({pid:"1"}, x=>{
            stat=x;
        })
        if(stat)
            sent={code:"invalid",foundDoc:x}
        else 
        sent ={code:"valid",foundDoc:"N/A"};

        res.status(200).json(sent);
    }catch(err){
        console.log(err);
        res.status(500).json(err);

    }
})

router.post('/verify',async (req,res)=>{
    try{
        const newQR = new QR( {
            pid:req.query.pid,
            pCompany:req.query.pCompany,
            pType:req.query.pType
        });

        const qrCode =await  newQR.save();

        res.status(200).json(qrCode);

    }catch(err){
        console.log(err);
        res.status(500).json(err);

    }
})

module.exports = router ;