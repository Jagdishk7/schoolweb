const express = require('express');
const collection = require('./mongo');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/login',cors(),(req,resp)=>{

})

app.post('/login',async(req,resp)=>{
    // req.body gets data from inputs in page
    const{email,password} = req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            resp.json('exist')
        }
        else{
            resp.json('notexist')
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})



app.post('/register',async(req,resp)=>{
    const{email,password} = req.body

    const data = {
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            resp.json('exist')
        }
        else{
            resp.json('notexist')
            // if not exist insert data to mongodb
            await collection.insertMany([data])
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})


app.listen(3000,()=>{
    console.log('the port is connected')
})