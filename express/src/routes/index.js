import express from 'express'
import { Home } from '../controller/index.js'
import userRoutes from './userroutes.js'

const router = express.Router()

router.get('/', Home)
router.use('/user',userRoutes)

export default router
