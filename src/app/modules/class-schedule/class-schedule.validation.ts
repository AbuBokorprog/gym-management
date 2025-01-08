import { z } from 'zod'

// Create ClassSchedule Schema
export const createClassScheduleSchema = z.object({
  date: z.date({ required_error: 'Date is required' }),
  startTime: z.date({ required_error: 'Start time is required' }),
  endTime: z.date({ required_error: 'End time is required' }),
  trainerId: z.string().uuid({ message: 'Trainer ID must be a valid UUID' }),
  maxTrainee: z.number().min(1, 'Max trainees must be at least 1').default(10),
  totalCurrentTrainee: z
    .number()
    .min(0, 'Total current trainees cannot be negative')
    .default(0),
})

// Update ClassSchedule Schema
export const updateClassScheduleSchema = z.object({
  date: z.date().optional(),
  startTime: z.date().optional(),
  endTime: z.date().optional(),
  trainerId: z
    .string()
    .uuid({ message: 'Trainer ID must be a valid UUID' })
    .optional(),
  maxTrainee: z.number().min(1, 'Max trainees must be at least 1').optional(),
  totalCurrentTrainee: z
    .number()
    .min(0, 'Total current trainees cannot be negative')
    .optional(),
})

export const classScheduleValidation = {
  createClassScheduleSchema,
  updateClassScheduleSchema,
}
