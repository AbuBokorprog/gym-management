import { classSchedule } from '@prisma/client'
import prisma from '../../helpers/prisma'
import { AppError } from '../../utils/AppError'
import httpStatus from 'http-status'

const createClassSchedule = async (payload: classSchedule) => {
  const data = await prisma.classSchedule.create({
    data: payload,
  })

  return data
}
const retrieveAllClassSchedule = async () => {
  const data = await prisma.classSchedule.findMany({})

  return data
}
const retrieveSingleClassSchedule = async (id: string) => {
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
const updateClassSchedule = async (
  id: string,
  payload: Partial<classSchedule>,
) => {
  const isExistClassSchedule = await prisma.classSchedule.findUnique({
    where: { id },
  })

  if (!isExistClassSchedule) {
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
const deleteClassSchedule = async (id: string) => {
  const data = await prisma.classSchedule.delete({
    where: { id },
  })

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'classSchedule delete failed!')
  }

  return data
}

export const classScheduleServices = {
  createClassSchedule,
  retrieveAllClassSchedule,
  updateClassSchedule,
  deleteClassSchedule,
  retrieveSingleClassSchedule,
}
