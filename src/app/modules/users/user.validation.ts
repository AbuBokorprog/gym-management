import { z } from 'zod'

// Create User Schema
export const createUserValidation = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  profileImage: z.string().url('Invalid URL').optional(),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  //   schedules: z.array(z.any()).optional(), // Adjust based on `ClassSchedule` structure
  //   bookingClass: z.array(z.any()).optional(), // Adjust based on `BookingClass` structure
})

// Update User Schema
export const updateUserValidation = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  fullName: z.string().min(1).optional(),
  email: z.string().email('Invalid email address').optional(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .optional(),
  profileImage: z.string().url('Invalid URL').optional(),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 characters')
    .optional(),
  //   schedules: z.array(z.any()).optional(), // Adjust based on `ClassSchedule` structure
  //   bookingClass: z.array(z.any()).optional(), // Adjust based on `BookingClass` structure
})

export const userValidation = { createUserValidation, updateUserValidation }
