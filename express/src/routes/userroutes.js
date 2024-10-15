import express from 'express'
import userController from '../controller/User.js'

const router = express.Router()

router.get('/getAllUsers',userController.getAllUsers)
router.get('/getUserById/:id',userController.getUserId)

export default router