const router = require('express').Router();
const Brand = require('../models/brand');
const authCheck = require('../middleware/check-auth')
router.get('/', authCheck, (req, res) => {
    Brand.find({})
         .exec()
         .then((result) => {
             if(result.length < 1) {
                 return res.json({success: false, message: "No brand found"})
             }
             res.json({success : true, data: result})
         })
         .catch((err) => {
             res.json({success: false, messsage : "server error"})
         })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Brand.findById(id)
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

router.patch('/:id', (req, res) => {
  const id =  req.params.id;
//   const updated_data = {
//     description:  req.body.description
//   }
  Brand.update({_id: id}, {$set : req.body})
       .exec()
       .then((_) => {
        res.json({success: true, message: "Brand has been  updated"})
       })
       .catch(err => {
           res.json({success: false, message: "Server error"})
       })
})

router.delete('/:id', (req, res) => {
    const id =  req.params.id;
    Brand.deleteOne({_id:id})
         .exec()
         .then((_) => {
          res.json({success: true, message: "brand has been deleted"})
         })
         .catch(err => {
             res.json({success: false, message: "Server error"})
         })
})

module.exports = router;