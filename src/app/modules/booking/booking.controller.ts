import httpStatus from 'http-status'
import CatchAsync from '../../utils/CatchAsync'
import SuccessResponse from '../../utils/SuccessResponse'
import { bookingServices } from './booking.services'
import { Request, Response } from 'express'

const createBookingSchedule = CatchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req?.user
    const data = await bookingServices.createBookingSchedule(id, req.body)

    SuccessResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Create booking schedule successfully!',
      data,
    })
  },
)
const retrieveAllBookingSchedule = CatchAsync(async (req, res) => {
  const data = await bookingServices.retrieveAllBookingSchedule()

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve all booking schedules successfully!',
    data,
  })
})
const retrieveSingleBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.retrieveSingleBookingSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve booking schedule successfully!',
    data,
  })
})
const updateBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.updateBookingSchedule(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Update booking schedule successfully!',
    data,
  })
})
const deleteBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.deleteBookingSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Delete booking schedule successfully!',
    data,
  })
})

export const bookingController = {
  createBookingSchedule,
  retrieveAllBookingSchedule,
  updateBookingSchedule,
  retrieveSingleBookingSchedule,
  deleteBookingSchedule,
}
