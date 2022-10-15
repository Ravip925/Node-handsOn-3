const express = require("express");

const PORT = 3001;

const app = express();

const middleWare1 = (req,res,next) => {
    console.log("Hey! I am Middleware 1");
    next();
}
const middleWare2 = (req,res,next) => {
    console.log("Hey! I am Middleware 2");
    next();
}

app.use(middleWare1);

app.get('/', (req,res)=>{
    res.send('Hey! Welcome');
})

app.get('/home', (req,res)=>{
    res.send('You are in Home route');
})



app.get('/about',middleWare2, (req,res)=>{
    res.send('<h1>Welcome to About</h1>');
})


app.get('/contact',middleWare2, (req,res)=>{
    res.send('<h1>Please Contact Us</h1> <h3>www.xyz@gamail.com</h3> ');
})



app.listen(PORT,()=>{
    console.log('server on');
})