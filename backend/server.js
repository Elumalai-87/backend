const express = require('express');
const mongoose = require('mongoose');
const db = require('./Schema');
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.15')
    .catch(err => console.log(err.message))

app.get('/', (req, res) => {

    res.status(500).send({ Error: "You Hit wrong path" })
});

app.get('/voice', async (req, res) => {
    const query = req.query;
    const isMulValue = query.lang.includes(',');
    if(isMulValue){
        const lang = query.lang.split(',');
        const data = await db.find({
            language: lang,
            gender: query.gender,
            age: Number(query.age),
            slang: query.slang
        });
        res.status(200).send(data);
    }else{
        const data = await db.find({
            language: query.lang,
            gender: query.gender,
            age: Number(query.age),
            slang: query.slang
        });
        res.status(200).send(data);
    }


});

const data = async () => {
    const d = await db.insertMany({
        memberNumber: 13,
        name: "Ashok",
        gender: "Male",
        slang: "madurai",
        age: [20,21,22,36],
        language: "telugu"
    });
    console.log(d);
};

app.listen(2500, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Server Running');
    }
})