import express from 'express'
import { userRoute } from '../modules/users/user.route'
import { classScheduleRoute } from '../modules/class-schedule/class-schedule.route'
import { bookingScheduleRoute } from '../modules/booking/booking.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    router: userRoute,
  },
  {
    path: '/class-schedule',
    router: classScheduleRoute,
  },
  {
    path: '/booking-schedule',
    router: bookingScheduleRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router
