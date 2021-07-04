const express = require('express')

const app =  express()
const port = process.env.port || 8080;

//routing
app.get('/', (req, res) => {
    return res.json("hello world");
})
app.get('/list-of-items', (req, res) => {
    return res.json("list of items");
})
app.get('/name/:n/age/:a', (req, res) => {
    const name = req.params.n;
    const age  = req.params.a
    return res.json({name : name, age: age});
})

app.listen(port, function() {
    console.log("server is ready : " + port)
})


