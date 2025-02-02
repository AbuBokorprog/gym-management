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
      status: httpStatus.CREATED,
      success: true,
      message: 'Class booked successfully!',
      data,
    })
  },
)
const retrieveMyAllBookingSchedule = CatchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { id } = req?.user
    const data = await bookingServices.retrieveMyAllBookingSchedule(id)

    SuccessResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Retrieved my booked schedules successfully!',
      data,
    })
  },
)
const retrieveSingleBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.retrieveSingleBookingSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieved booked schedule successfully!',
    data,
  })
})
const updateBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.updateBookingSchedule(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Updated booked schedule successfully!',
    data,
  })
})
const updateBookingScheduleStatus = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.updateBookingSchedule(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Updated booked schedule status successfully!',
    data,
  })
})
const deleteBookingSchedule = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await bookingServices.deleteBookingSchedule(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Deleted booked schedule successfully!',
    data,
  })
})

export const bookingController = {
  createBookingSchedule,
  retrieveMyAllBookingSchedule,
  updateBookingSchedule,
  retrieveSingleBookingSchedule,
  deleteBookingSchedule,
  updateBookingScheduleStatus,
}
