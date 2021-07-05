const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 8080;
const Brand = require('./models/brand')
const brandRoute = require('./routes/brand-route')
mongoose.connect(
    "mongodb+srv://puku:root@cluster1.lz6mq.mongodb.net/e-comm-data",
    function (err) {
        if (err) {
            console.log("Db is not connected")
        } else {
            console.log("Db connected")
        }
    })

//routing
app.use('/api/brand', brandRoute)
app.post('/', (req, res) => {
    res.json("post route")
})
app.patch('/', (req, res) => {
    res.json("patch route")
})
app.get('/', (req, res) => {

    Brand.find()
         .exec()
         .then((result) => {
             res.json(result)
         })
         .catch((err) => {
             res.json(err);
         })

//     const brand = new Brand({
//         title: "THis is title",
//         description: "This is description",
//         thumbnail: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg",
//         category: "SpaceX, tesla, Boring",
//         created_At: Date.now().valueOf(),
//         updated_At: Date.now().valueOf()
//     })
//    brand.save()
//         .then((result) => {
//             console.log("success")
//             res.json("data has  been added")
//         })
//         .catch((err) => {
//             console.log("failed")
//             res.json("server error") 
//         })
})

app.listen(port, function () {
    console.log("server is ready : " + port)
})



