// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID=mongodb.ObjectId


const{MongoClient,ObjectID, ObjectId, Logger}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


const id=ObjectId()
console.log(id);
console.log(id.getTimestamp());



MongoClient.connect(connectionURL, { useNewUrlParser: true }, async (error, client) => {
    if (error) {
        return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName)


    // db.collection('users').findOne({_id: new ObjectId('634e8fcca20323d943d6f220')}).then((result)=>{
    //     console.log(result);
    // })

    // const findResult = await     db.collection('tasks').find({completed:false}).toArray()
    // console.log('Found documents =>', findResult);
    
    // // res.next((error,dog)=>{

    // })

    // });

    // db.collection('users').insertMany([
    //     {
    //         name:'anshu',
    //         age:11
    //     },
    //     {
    //         name :'arun',
    //         age:23
    //     }
    // ])


    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Project PPT',
    //         completed : false
    //     },{
    //         description : 'Sleeping',
    //         completed:true
    //     }
    // ])


    db.collection('users').updateOne({
        _id:new ObjectId('634e9619f7b29999356dde92')
    },{
        $set:{
            name:'algla'
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })

})




