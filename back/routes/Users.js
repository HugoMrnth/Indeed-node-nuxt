const express = require("express");
const router = express.Router();
const { Users, Companies, Peoples } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');
const bcrypt = require('bcrypt');

const { sign } = require('jsonwebtoken')

router.get("/",async (req, res) => {
    const allPeoples = await Users.findAll();
    res.json(allPeoples);
})

router.get("/logged", validateToken, async (req, res) => {
    return res.json(true);
})

router.post("/registration", async (req, res) => {
    const { email, password, isACompany } = req.body;
    const user = await Users.findOne({ where: { email: email }})
    if(user) {
        res.json("Email already used");
    } else {
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                email: email,
                password: hash,
                isACompany: isACompany
            });
        });
        res.json("Account created");
    }
})

router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email }})
    if(!user) {
        return res.json( { error: ["No user found"] });
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match) {
                return res.json( { error: ["Wrong email or Password"] });
            } else {
                const accessToken = sign({ email: user.email, id: user.id }, 'secretJk');
                return res.json({
                    accessToken: accessToken,
                    isACompany: user.isACompany
                })
            }    
        })
    }
})

module.exports = router;