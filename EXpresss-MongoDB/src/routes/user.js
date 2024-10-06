import express from "express"
import userController from '../controller/users.js'
const router = express.Router()

router.get('/getalluser',userController.getalluser)
router.get('/getalluserid/:id',userController.getuserbyid)
router.post('/createuser',userController.createuser)
router.put('/edituserbyid/:id',userController.edituserbyid)
router.delete('/deleteuserbyid/:id',userController.deleteuserbyid)

export default router