const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h1>Chai aur Code</h1>')

})

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})