const express = require('express')
const { use } = require('express/lib/router')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middlewear/auth')

router.post('/users', async (req, res) => {


    const user = new User(req.body)

    try {

        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })
    }
    catch (e) {
        res.status(400).send(e)
    }



})



router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    }
    catch (e) {
        res.status(400).send()
    }
})


router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()

    } catch (e) {
        res.status(500).send()

    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()

    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// router.get('/user/:id', async (req, res) => {
//     const id = req.params.id

//     try {
//         const user = await User.findById(id)
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }



// })



router.patch('/users/me',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    // console.log(updates);
    const allowdUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((updat) => {
        return allowdUpdates.includes(updat)
    })
    if (!isValidOperation) {
        return res.status(400).send({ error: '!!! Invalid updates !!!' })
    }
    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        const user = req.user
        updates.forEach((updat) => {
            user[updat] = req.body[updat]
        })
        await user.save()

        res.send(user)
    } catch (e) {

        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)
        await req.user.remove()
        res.send(req.user)

    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router