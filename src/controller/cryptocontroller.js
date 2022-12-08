const bitcoinmodel=require("../models/cryptomodel")
const axios=require("axios")


const getcrypto=async function(req,res){
    try{
        let options={
            method:'get',
            headers: {
                Authorization: `Bearer XXXXXXXXX`
               
              },
            url:`http://api.coincap.io/v2/assets?key=$(req.headers.Authorization)`
        }
        let result=await axios(options)
        // console.log(result.data)
       let data=result.data.data
       const sortdata=data.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr} )
    //    console.log(sortdata)
       await bitcoinmodel.deleteMany()
       await bitcoinmodel.insertMany(sortdata)
       res.status(200).send({status:true,msg:sortdata})

       
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}



module.exports={getcrypto}