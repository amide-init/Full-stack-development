const router = require('express').Router();
const Brand = require('../models/brand');

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
    const brand = new Brand({
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        category: req.body.category,
    });
    brand.save()
        .then(
            (result) => {
                res.json({ success: true, message: "Brand has been created" })
            }
        )
        .catch(
            (err) => {
                res.json({ success: false, message: "Brand creation issue" })
            }
        )

})

router.patch('/', (req, res) => {
    res.json("patch route")
})

router.delete('/', (req, res) => {
    res.json("delete route")
})

module.exports = router;