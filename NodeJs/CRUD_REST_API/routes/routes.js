const express = require('express')
const router = express.Router()
const User = require('../Model/user')

router.get('/', async(req, res)=>{
    // console.log('get requested..')
    // res.send('get request')
    try{
        const user = await User.find();
        res.json(user)

    }catch(err){
        res.send('error..:' + err)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user)

    }catch(err){
        res.send('error' + err)
    }
})

router.patch('/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub
        const user1 = await user.save()
        res.json(user1)

    }catch(err){
        res.send('error' + err)
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const user1 = await user.remove()
        res.json(user1)

    }catch(err){
        res.send('error' + err)
    }
})

router.post('/', async(req, res)=>{
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    })

    try{
        const user1 = await user.save()
        res.json(user1)

    }catch(err){
        console.log(err)
    }
})

module.exports = router