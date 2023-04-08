const mongoose=require("mongoose")
const {Schema}=mongoose;

const commentsSchema= new Schema({
    name: String,
    comment: String,
    date: {type: Date, default:Date.now}
})

const Comment= new mongoose.model("Comment", commentsSchema)

module.exports= Comment