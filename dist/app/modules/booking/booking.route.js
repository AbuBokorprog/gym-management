"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingScheduleRoute = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const ValidationRequest_1 = __importDefault(require("../../utils/ValidationRequest"));
const booking_validation_1 = require("./booking.validation");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post('/', (0, Auth_1.default)(client_1.Role.TRAINEE), (0, ValidationRequest_1.default)(booking_validation_1.bookingScheduleValidation.createBookingClassSchema), booking_controller_1.bookingController.createBookingSchedule);
router.get('/', (0, Auth_1.default)(client_1.Role.ADMIN, client_1.Role.TRAINEE, client_1.Role.TRAINER), booking_controller_1.bookingController.retrieveAllBookingSchedule);
router.get('/:id', (0, Auth_1.default)(client_1.Role.ADMIN, client_1.Role.TRAINEE, client_1.Role.TRAINER), booking_controller_1.bookingController.retrieveSingleBookingSchedule);
router.patch('/:id', (0, Auth_1.default)(client_1.Role.ADMIN, client_1.Role.TRAINEE, client_1.Role.TRAINER), (0, ValidationRequest_1.default)(booking_validation_1.bookingScheduleValidation.updateBookingClassSchema), booking_controller_1.bookingController.updateBookingSchedule);
router.delete('/:id', (0, Auth_1.default)(client_1.Role.ADMIN, client_1.Role.TRAINEE, client_1.Role.TRAINER), booking_controller_1.bookingController.deleteBookingSchedule);
exports.bookingScheduleRoute = router;
