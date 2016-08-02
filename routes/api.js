import express, { Router } from 'express'
import { regularResponse } from '../utils/response'

const router = Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log(`Request url: api${req.url}  Time: ${Date.now()}`)
    next()
})

router.get('/users', (req, res) => {
    let users_info = ([['same', 22], ['joe', 24]]).reduce((acc, current) =>{
        let obj = {
            name: current[0],
            age: current[1]
        }
        acc.push(obj)
        return acc
    }, [])

    let users = {
        entries: users_info
    }

    regularResponse(res, users)
})

export default router