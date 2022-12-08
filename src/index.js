const express=require("express")
const mongoose=require("mongoose")
const route=require("./routes/route")

const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://krishnakanthkk211:krishna211@cluster0.j8rhn47.mongodb.net/krishnakanthkk211-DB"
,{useNewUrlParser:true})
.then(()=>console.log("mongoDb is connected"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT||3000, function(){
    console.log("Express process running on port " + (process.env.PORT|| 3000))
})