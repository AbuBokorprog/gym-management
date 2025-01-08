"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingScheduleRoute = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.post('/', booking_controller_1.bookingController.createBookingSchedule);
router.get('/', booking_controller_1.bookingController.retrieveAllBookingSchedule);
router.get('/:id', booking_controller_1.bookingController.retrieveSingleBookingSchedule);
router.patch('/:id', booking_controller_1.bookingController.updateBookingSchedule);
router.delete('/:id', booking_controller_1.bookingController.deleteBookingSchedule);
exports.bookingScheduleRoute = router;
