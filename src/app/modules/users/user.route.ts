import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.retrieveAllUsers)
router.get('/:id', userController.retrieveSingleUsers)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoute = router
