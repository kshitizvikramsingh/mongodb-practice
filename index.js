const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const Comment=require("./mongoose-models/comment-model")

mongoose.connect('mongodb://127.0.0.1:27017/testComments')
.then(()=>{
    console.log("Connection to mongoose estabilished")
})
.catch((error)=>{
    console.log("OOPS! cant connect" + error)
})
const app= express()

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
const public=path.join(__dirname,"public")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))
app.use(express.static(public ))

app.get("/", (re,res)=>{
    res.render("homepage")
})

app.get("/new",(req,res)=>{
    res.render("new-comment")
})

app.post("/new",(req,res)=>{
    
    const newComment= new Comment(req.body)
    newComment.save() 
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.send(error)
    })
})

app.get("/view",(req,res)=>{
     Comment.find()
     .then((data)=>{
        const datas=data
        console.log(datas)
        res.render("view",{datas})
     })
    
})







app.listen(3000,()=>{
    console.log("Express app up on port 3000")
})
