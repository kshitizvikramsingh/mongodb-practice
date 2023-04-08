const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/test-comments')
    .then(()=>{
        console.log("Mongoose connection estabilished");
    })
    .catch((err)=>{
        console.log("Cannot estabilish the connection");
        console.log(err);
    })

const CommentSchema= new mongoose.Schema({
    name: String,
    comment: String,
    
})

const Comment=mongoose.model("Comment",CommentSchema);
//const anna= new Dog({name:"Anna", age: 4});
/* anna.save()
    .then((data)=>{
        console.log("document successfully added!")
        console.log(data)
    })
    .catch((err)=>{
        console.log("Oh no, there's an Error")
        console.log(err);
    })  */

// Dog.findOne({})
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//let us pass a sample comment to test out:

const passComment=async(name,comment)=>{
    const comment1=new Comment({name,comment})
    await comment1.save()          //.save() is a promise if it succeeds it returns the doc that was added else it shows an error
        .then((data)=>{
                console.log("data is: "+ data)
        })
}

passComment('Kshitiz','Another test comment');

