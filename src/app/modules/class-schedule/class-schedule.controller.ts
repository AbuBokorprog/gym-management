import httpStatus from 'http-status'
import CatchAsync from '../../utils/CatchAsync'
import SuccessResponse from '../../utils/SuccessResponse'
import { classScheduleServices } from './class-schedule.services'

const createClassSchedule = CatchAsync(async (req, res) => {
  const data = await classScheduleServices.createClassSchedule(req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Create user successfully!',
    data,
  })
})
const retrieveAllClassSchedule = CatchAsync(async (req, res) => {
  const data = await classScheduleServices.retrieveAllClassSchedule()

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve all users successfully!',
    data,
  })
})
const retrieveSingleClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.retrieveSingleClassSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve user successfully!',
    data,
  })
})
const updateClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.updateClassSchedule(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Update user successfully!',
    data,
  })
})
const deleteClassSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await classScheduleServices.deleteClassSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Delete user successfully!',
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
