const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.port || 8080;
const bodyParser = require('body-parser');
const Brand = require('./models/brand')
const brandRoute = require('./routes/brand-route')
const itemRoute = require('./routes/item-route')
const authRoute = require('./routes/auth-route')
mongoose.connect(
    "mongodb+srv://amide:root@e-comm-app-db.p0hwj.mongodb.net/e-comm-data",
    function (err) {
        if (err) {
            console.log("Db is not connected")
        } else {
            console.log("Db connected")
        }
    })

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api/brand', brandRoute)
app.use('/api/item', itemRoute)
app.use('/api/auth', authRoute)


app.listen(port, function () {
    console.log("server is ready : " + port)
})



