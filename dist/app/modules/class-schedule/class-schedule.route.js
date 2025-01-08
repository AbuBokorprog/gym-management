"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classScheduleRoute = void 0;
const express_1 = __importDefault(require("express"));
const class_schedule_controller_1 = require("./class-schedule.controller");
const router = express_1.default.Router();
router.post('/', class_schedule_controller_1.classScheduleController.createClassSchedule);
router.get('/', class_schedule_controller_1.classScheduleController.retrieveAllClassSchedule);
router.get('/:id', class_schedule_controller_1.classScheduleController.retrieveSingleClassSchedule);
router.patch('/:id', class_schedule_controller_1.classScheduleController.updateClassSchedule);
router.delete('/:id', class_schedule_controller_1.classScheduleController.deleteClassSchedule);
exports.classScheduleRoute = router;
