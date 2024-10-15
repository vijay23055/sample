import express from 'express'
import bookingData from '../controller/rooms.index.js'

const router = express.Router()

router.get('/getroomsdata',bookingData.bookingData)
router.get('/getcustomerData',bookingData.customerData)
router.post('/roomBooking',bookingData.createRoom)
router.post('/createRoom',bookingData.roomBooking)
router.get('/rooms/:roomId/bookings/:customerName/details',bookingData.getcustomerBooking)

export default router