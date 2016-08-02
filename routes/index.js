import express, { Router } from 'express'


const router = Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log(`Request url: ${req.url}  Time: ${Date.now()}`)
    next()
})

router.get('/', (req, res) => {
    res.send('home');
})

export default router