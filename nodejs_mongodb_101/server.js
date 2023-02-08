const express = require('express')
const app = express()
app.use(express.json())

require('dotenv').config();
require('./controllers/db')(); 
require('./controllers/ProductController')(app);

// if you want active urlencoded
//app.use(express.urlencoded({extended:false}))

// Routes
app.get('/',(req,res)=>{
    res.send('Hello Node API')
})
app.get('/blog',(req,res)=>{
    res.send('Hello Blog, My name is Mohamed Shahin')
})


const port = process.env.PORT || 3000

app.listen(port ,()=> console.log(`=> Node API app is running on port ${port}`))
//const server = app.listen(port ,()=> console.log(`=> Node API app is running on port ${port}`))
//module.exports = server;