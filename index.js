const express = require('express');
const cors = require('cors');


const port = process.env.PORT || 5000;

const app = express();

// middleware : 

app.use(cors());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('app is running')
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`);
})
