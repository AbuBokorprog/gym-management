"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classScheduleValidation = exports.updateClassScheduleSchema = exports.createClassScheduleSchema = void 0;
const zod_1 = require("zod");
// Create ClassSchedule Schema
exports.createClassScheduleSchema = zod_1.z.object({
    date: zod_1.z.date({ required_error: 'Date is required' }),
    startTime: zod_1.z.date({ required_error: 'Start time is required' }),
    endTime: zod_1.z.date({ required_error: 'End time is required' }),
    trainerId: zod_1.z.string().uuid({ message: 'Trainer ID must be a valid UUID' }),
    maxTrainee: zod_1.z.number().min(1, 'Max trainees must be at least 1').default(10),
    totalCurrentTrainee: zod_1.z
        .number()
        .min(0, 'Total current trainees cannot be negative')
        .default(0),
});
// Update ClassSchedule Schema
exports.updateClassScheduleSchema = zod_1.z.object({
    date: zod_1.z.date().optional(),
    startTime: zod_1.z.date().optional(),
    endTime: zod_1.z.date().optional(),
    trainerId: zod_1.z
        .string()
        .uuid({ message: 'Trainer ID must be a valid UUID' })
        .optional(),
    maxTrainee: zod_1.z.number().min(1, 'Max trainees must be at least 1').optional(),
    totalCurrentTrainee: zod_1.z
        .number()
        .min(0, 'Total current trainees cannot be negative')
        .optional(),
});
exports.classScheduleValidation = {
    createClassScheduleSchema: exports.createClassScheduleSchema,
    updateClassScheduleSchema: exports.updateClassScheduleSchema,
};
