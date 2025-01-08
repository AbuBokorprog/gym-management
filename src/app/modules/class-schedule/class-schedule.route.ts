import express from 'express'
import { classScheduleController } from './class-schedule.controller'
const router = express.Router()

router.post('/', classScheduleController.createClassSchedule)
router.get('/', classScheduleController.retrieveAllClassSchedule)
router.get('/:id', classScheduleController.retrieveSingleClassSchedule)
router.patch('/:id', classScheduleController.updateClassSchedule)
router.delete('/:id', classScheduleController.deleteClassSchedule)

export const classScheduleRoute = router
