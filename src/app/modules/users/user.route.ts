import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/create-admin', userController.createUser)
router.post('/create-trainer', userController.createUser)
router.post('/create-user', userController.createUser)
router.get('/', userController.retrieveAllUsers)
router.get('/:id', userController.retrieveSingleUsers)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoute = router
