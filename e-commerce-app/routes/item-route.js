const router = require('express').Router();
const Item = require('../models/item');
router.get('/', (req, res) => {
    Item.find({})
        .exec()
        .then((result) => {
            if (result.length < 1) {
                return res.json({ success: false, message: "No Item Found" });
            }
            res.json({ success: true, data: result })
        })
        .catch((err) => {
            res.json({ success: false, message: "Server error" })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Item.findById(id)
         .exec()
         .then(result => {
             if(result) {
                return res.json({success : true, data: result})
             }
             res.json({success : false, message: "Invalid ID" })
           
         })
         .catch((err) => {
            res.json({success : false, message: "Server error"})
         })
})
router.post('/', (req, res) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
    });

    item.save()
        .then((_) => {
            res.json({ success: true, message: "Item has been created" })
        })
        .catch((err) => {
            res.json({ success: false, message: "server error" })
        })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;

    Item.update({ _id: id }, { $set: req.body })
        .exec()
        .then((_) => {
            res.json({ success: true, message: "Item has been  updated" })
        })
        .catch(err => {
            res.json({ success: false, message: "Server error" })
        })
})
router.delete('/:id', (req, res) => {
    const id =  req.params.id;
    Item.deleteOne({_id:id})
         .exec()
         .then((_) => {
          res.json({success: true, message: "Item has been deleted"})
         })
         .catch(err => {
             res.json({success: false, message: "Server error"})
         })
})
module.exports = router;