
require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Data =require('./models/data')

const app =express();
const PORT = process.env.PORT || 1500;


mongoose.set('strictQuery',false);

const connectDB = async ()=>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB :${conn.connection.host}`);
    }catch(err){
         console.log(err)
         process.exit(1);
    }
}

app.get('/',(req,res)=>
{
    res.send({title:'Data'})
})

app.get('/add-data', async (req,res)=>
{
    try{
        await Data.insertMany([
            {
                "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                "destination_title": "Lake Christina only",
                "location": "Turkmenistan",
                "grade": 3,
                "fees": 954,
                "description": "Charge sort wear unit. Oil onto admit research degree. Mother individual bank skill these.",
                "id": 74
              },
              {
                "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                "destination_title": "Rosariomouth identify",
                "location": "Greece",
                "grade": 3,
                "fees": 675,
                "description": "Local purpose participant husband political. Generation stop part attention.",
                "id": 75
              }
        ]);
        res.send("Data Added");
    }catch(err){
        console.log("err",+err);
    }
})

app.get('/data',async(req,res)=>
{
    const data = await Data.find();

    if(data)
    {
        res.json(data)
    }
    else
    {
        res.send("Something went Wrong");
    }
})


connectDB().then(()=>
{
    app.listen(PORT,()=>
    {
        console.log('listening on Port 1500')
    })
})



// const connection = require('./config');

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');



// app.get("/", (req, res) => {
//     res.send("Welcome to the HomePage");
//   });


// app.listen(1000, async () => {
//     try {
//       await connection;
//       console.log("connected to mongodb successfully");
//     } catch (err) {
//       console.log("error in db file");
//       console.log(err);
//     }
//     console.log("listen to port 8005");
//   });
