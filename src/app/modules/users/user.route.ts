import express from 'express'
import { userController } from './user.controller'
import ValidationRequest from '../../utils/ValidationRequest'
import { userValidation } from './user.validation'
import Auth from '../../middlewares/Auth'
import { Role } from '@prisma/client'
const router = express.Router()

router.post(
  '/create-admin',
  ValidationRequest(userValidation.createUserValidation),
  userController.createUser,
)
router.post(
  '/create-trainer',
  Auth(Role.ADMIN),
  ValidationRequest(userValidation.createUserValidation),
  userController.createUser,
)
router.post(
  '/create-user',
  ValidationRequest(userValidation.createUserValidation),
  userController.createUser,
)
router.get('/', userController.retrieveAllUsers)
router.get('/:id', userController.retrieveSingleUsers)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoute = router
