const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT 
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


const multer=require('multer')
const upload=multer({
    dest:'images',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docs)$/)){
            cb(new Error('File must be a Word Document'))
        }
        cb(undefined,true)

    }
})

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error: error.message})

})


app.use(express.json())


app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log("server is up on port " + port);
})






















// const pet={
//     name:'uttkarsh'

// }

// pet.toJSON=function(){
//     return {}
// }

// console.log(JSON.stringify(pet));

// const jwt=require('jsonwebtoken')

// const myFunction= async()=>{
//     const token=jwt.sign({_id:'abc123'},'thisis',{expiresIn: '3 seconds'})
//     console.log(token);
//     const data=jwt.verify(token,'thisis')
//     console.log(data);
// }



// myFunction()