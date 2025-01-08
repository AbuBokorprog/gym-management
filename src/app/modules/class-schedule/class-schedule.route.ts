import express from 'express'
import { classScheduleController } from './class-schedule.controller'
import Auth from '../../middlewares/Auth'
import { Role } from '@prisma/client'
import ValidationRequest from '../../utils/ValidationRequest'
import { classScheduleValidation } from './class-schedule.validation'
const router = express.Router()

router.post(
  '/',
  Auth(Role.ADMIN),
  ValidationRequest(classScheduleValidation.createClassScheduleSchema),
  classScheduleController.createClassSchedule,
)
router.get('/', classScheduleController.retrieveAllClassSchedule)
router.get('/:id', classScheduleController.retrieveSingleClassSchedule)
router.patch(
  '/:id',
  Auth(Role.ADMIN),
  ValidationRequest(classScheduleValidation.updateClassScheduleSchema),
  classScheduleController.updateClassSchedule,
)
router.delete('/:id', classScheduleController.deleteClassSchedule)

export const classScheduleRoute = router
