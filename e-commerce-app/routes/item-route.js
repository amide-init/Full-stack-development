const router = require('express').Router();

router.get('/', (req, res) => {
    res.json("get route")
})

router.post('/', (req, res) => {
    res.json("post route")
})

router.patch('/', (req, res) => {
    res.json("patch route")
})

module.exports =  router;