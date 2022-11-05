// const dowork=(callbck)=>{
//     setTimeout(()=>{
//         // callback('This is my error',undefined)
//          callbck(undefined,[1,4,7])
//     },2000)
// }


// dowork((error,result)=>{
//     if(error){
//         return console.log(error);

//     }
//     console.log(result);

// })  


const dopromise=new Promise((result,reject)=>{
    setTimeout(()=>{
        // result([1,2,3])
        reject('FUCK YOU')
    },2000)

})

dopromise.then((res)=>{
    console.log('success',res);
}).catch((e)=>{
    console.log(e);
})