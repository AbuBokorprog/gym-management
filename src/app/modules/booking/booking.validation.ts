import { z } from 'zod'

// Create BookingClass Schema
export const createBookingClassSchema = z.object({
  traineeId: z.string().uuid({ message: 'Trainee ID must be a valid UUID' }),
  scheduleId: z.string().uuid({ message: 'Schedule ID must be a valid UUID' }),
})

// Update BookingClass Schema
export const updateBookingClassSchema = z.object({
  traineeId: z
    .string()
    .uuid({ message: 'Trainee ID must be a valid UUID' })
    .optional(),
  scheduleId: z
    .string()
    .uuid({ message: 'Schedule ID must be a valid UUID' })
    .optional(),
})

export const bookingScheduleValidation = {
  createBookingClassSchema,
  updateBookingClassSchema,
}
