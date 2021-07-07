const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 8080;
const bodyParser = require('body-parser');
const Brand = require('./models/brand')
const brandRoute = require('./routes/brand-route')
const itemRoute = require('./routes/item-route')
mongoose.connect(
    "mongodb+srv://amide:root@e-comm-app-db.p0hwj.mongodb.net/e-comm-data",
    function (err) {
        if (err) {
            console.log("Db is not connected")
        } else {
            console.log("Db connected")
        }
    })


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api/barnd', brandRoute)
app.use('/api/item', itemRoute)


app.listen(port, function () {
    console.log("server is ready : " + port)
})



