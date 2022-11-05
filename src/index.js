const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3000
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


// app.use((req,res,next)=>{
//     if(req.method=='GET'){


//     }else{
//         next()
//     }   
//      next()

// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Check back soon!!')
// })

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log("server is up on port" + port);
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