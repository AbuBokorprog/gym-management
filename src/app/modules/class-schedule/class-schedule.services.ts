import { classSchedule } from '@prisma/client'
import prisma from '../../helpers/prisma'
import { AppError } from '../../utils/AppError'
import httpStatus from 'http-status'

const createClassSchedule = async (adminId: string, payload: classSchedule) => {
  const {
    date,
    startTime,
    endTime,
    maxTrainee,
    totalCurrentTrainee,
    trainerId,
  } = payload

  // 1. Check if already scheduled 5 classes on the given day
  const existingSchedules = await prisma.classSchedule.findMany({
    where: { date },
  })

  if (existingSchedules.length >= 5) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Class scheduling limit exceeded. Only 5 classes are allowed per day.',
    )
  }

  // 2. Check for time overlap
  const isOverlapping = existingSchedules.some(schedule => {
    const existingStartTime = new Date(`${date}T${schedule.startTime}`)
    const existingEndTime = new Date(`${date}T${schedule.endTime}`)
    const newStartTime = new Date(`${date}T${payload.startTime}`)
    const newEndTime = new Date(`${date}T${payload.endTime}`)
    return newStartTime < existingEndTime && newEndTime > existingStartTime
  })

  if (isOverlapping) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Class time overlaps with an existing schedule.',
    )
  }

  // 3. Create a class schedule.
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
