import express from 'express'
import { bookingController } from './booking.controller'

const router = express.Router()

router.post('/', bookingController.createBookingSchedule)
router.get('/', bookingController.retrieveAllBookingSchedule)
router.get('/:id', bookingController.retrieveSingleBookingSchedule)
router.patch('/:id', bookingController.updateBookingSchedule)
router.delete('/:id', bookingController.deleteBookingSchedule)

export const bookingScheduleRoute = router
