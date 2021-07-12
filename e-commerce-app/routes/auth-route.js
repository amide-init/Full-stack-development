const router = require('express').Router()
const User = require('../models/user')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
            bycrpt.compare(req.body.password, user.password, (err, ret) => {
                if (ret) {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    jwt.sign(payload, 'aminSecret', (e, token) => {
                        if (e) {
                            return res.json({ success: false, message: "Auth Failed 1" })
                        }
                        return res.json({ success: true, token: token, message: "Login successfully" })
                    })

                } else {
                    return res.json({ success: false, message: "Auth failed 3" })
                }
            })
        }).catch(err => {
            res.json({ success: false, message: "Auth failed 4" })
        })
})

router.post('/signup', (req, res) => {
    bycrpt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({ success: false, message: "Password hash Issue" })
        }
        const user = new User({
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hash
        });
        user.save()
            .then((result) => {
                return res.json({ success: true, message: "Account created Successfully" })
            })
            .catch((err) => {
                if (err.code === 11000) {
                    return res.json({ success: false, message: "E-mail already exists" })
                }
                res.json({ success: false, message: "server error" })
            })
    })

})

router.get('/', (req, res) => {
 
})

router.patch('/', (req, res) => {
    //update
})




module.exports = router;