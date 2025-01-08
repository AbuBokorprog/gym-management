import express from 'express'
import { userRoute } from '../modules/users/user.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    router: userRoute,
  },
  //   {
  //     path: '/borrow',
  //     route: borrowRecordRouter,
  //   },
  //   {
  //     path: '/return',
  //     route: returnRouter,
  //   },
]

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router
