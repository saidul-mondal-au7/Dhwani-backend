const express = require('express')
const State = require('../models/state')
const router = new express.Router()

router.post('/states', async(req,res)=>{
    const state = new State(req.body)

    try{
        await state.save()
        res.status(201).send(state)
    }catch(e){
        res.status(400).send(e)
    }

})

router.get('/states', async(req,res)=>{
    try{
        const state = await State.find({})
        res.send(state)
    }catch(e){
        res.status(500).send(e)
    }
})



module.exports = router;
