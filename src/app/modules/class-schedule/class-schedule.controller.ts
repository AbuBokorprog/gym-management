import httpStatus from 'http-status'
import CatchAsync from '../../utils/CatchAsync'
import SuccessResponse from '../../utils/SuccessResponse'
import { classScheduleServices } from './class-schedule.services'

const createClassSchedule = CatchAsync(async (req, res) => {
  const data = await classScheduleServices.createClassSchedule(req.body)

  SuccessResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Schedule created successfully',
    data,
  })
})
const retrieveAllClassSchedule = CatchAsync(async (req, res) => {
  const data = await classScheduleServices.retrieveAllClassSchedule()

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve all class schedules successfully!',
    data,
  })
})
const retrieveSingleClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.retrieveSingleClassSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve class schedule successfully!',
    data,
  })
})
const updateClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.updateClassSchedule(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Update class schedule successfully!',
    data,
  })
})
const deleteClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.deleteClassSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Delete class schedule successfully!',
    data,
  })
})

export const classScheduleController = {
  createClassSchedule,
  retrieveAllClassSchedule,
  updateClassSchedule,
  retrieveSingleClassSchedule,
  deleteClassSchedule,
}
