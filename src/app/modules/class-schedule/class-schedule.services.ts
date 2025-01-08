import { User } from '@prisma/client'
import prisma from '../../helpers/prisma'
import { AppError } from '../../utils/AppError'
import httpStatus from 'http-status'

const createClassSchedule = async (payload: User) => {
  const data = await prisma.user.create({
    data: payload,
  })

  return data
}
const retrieveAllClassSchedule = async () => {
  const data = await prisma.user.findMany({})

  return data
}
const retrieveSingleClassSchedule = async (id: string) => {
  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  return data
}
const updateClassSchedule = async (id: string, payload: Partial<User>) => {
  const isExistUser = await prisma.user.findUnique({
    where: { id },
  })

  if (!isExistUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  const data = await prisma.user.update({
    where: {
      id: id,
    },
    data: payload,
  })

  return data
}
const deleteClassSchedule = async (id: string) => {
  const data = await prisma.user.delete({
    where: { id },
  })

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User delete failed!')
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
