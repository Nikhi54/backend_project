const express  = require('express');
const initiateMongoServer = require('./db');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const userRoute = require('./foodRoute');
initiateMongoServer();


app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send('Please select opertaions: /api/v1/login , /api/v1/register , /api/v1/products');

});

app.use('/api/v1',userRoute);

app.listen(port , ()=>{
    console.log(`Hello world app listening on port${port}`);
})