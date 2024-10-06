import express from 'express'
import { getHome } from '../controller/index.js'
import roomsRoute from './roomRoute.index.js'

const router = express.Router()

router.get('/',getHome)
router.use('/room',roomsRoute)

export default router
