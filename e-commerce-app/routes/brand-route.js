const router = require('express').Router();

router.get('/amin', (req, res) => {
    res.json("get route")
})

router.post('/', (req, res) => {
    res.json("post route")
})

router.patch('/', (req, res) => {
    res.json("patch route")
})

router.delete('/', (req, res) => {
    res.json("delete route")
})

module.exports = router;