import { classSchedule } from '@prisma/client'
import prisma from '../../helpers/prisma'
import { AppError } from '../../utils/AppError'
import httpStatus from 'http-status'

const createBookingSchedule = async (payload: classSchedule) => {
  const data = await prisma.classSchedule.create({
    data: payload,
  })

  return data
}
const retrieveAllBookingSchedule = async () => {
  const data = await prisma.classSchedule.findMany({})

  return data
}
const retrieveSingleBookingSchedule = async (id: string) => {
  const data = await prisma.classSchedule.findUnique({
    where: {
      id: id,
    },
  })

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, 'classSchedule not found!')
  }

  return data
}
const updateBookingSchedule = async (
  id: string,
  payload: Partial<classSchedule>,
) => {
  const isExistBookingSchedule = await prisma.classSchedule.findUnique({
    where: { id },
  })

  if (!isExistBookingSchedule) {
    throw new AppError(httpStatus.NOT_FOUND, 'classSchedule not found!')
  }

  const data = await prisma.classSchedule.update({
    where: {
      id: id,
    },
    data: payload,
  })

  return data
}
const deleteBookingSchedule = async (id: string) => {
  const data = await prisma.classSchedule.delete({
    where: { id },
  })

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'classSchedule delete failed!')
  }

  return data
}

export const bookingServices = {
  createBookingSchedule,
  retrieveAllBookingSchedule,
  updateBookingSchedule,
  deleteBookingSchedule,
  retrieveSingleBookingSchedule,
}
