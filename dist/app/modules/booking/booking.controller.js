"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const SuccessResponse_1 = __importDefault(require("../../utils/SuccessResponse"));
const booking_services_1 = require("./booking.services");
const createBookingSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield booking_services_1.bookingServices.createBookingSchedule(req.body);
    (0, SuccessResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Create booking schedule successfully!',
        data,
    });
}));
const retrieveAllBookingSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield booking_services_1.bookingServices.retrieveAllBookingSchedule();
    (0, SuccessResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Retrieve all booking schedules successfully!',
        data,
    });
}));
const retrieveSingleBookingSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield booking_services_1.bookingServices.retrieveSingleBookingSchedule(id);
    (0, SuccessResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Retrieve booking schedule successfully!',
        data,
    });
}));
const updateBookingSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield booking_services_1.bookingServices.updateBookingSchedule(id, req.body);
    (0, SuccessResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Update booking schedule successfully!',
        data,
    });
}));
const deleteBookingSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield booking_services_1.bookingServices.deleteBookingSchedule(id);
    (0, SuccessResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Delete booking schedule successfully!',
        data,
    });
}));
exports.bookingController = {
    createBookingSchedule,
    retrieveAllBookingSchedule,
    updateBookingSchedule,
    retrieveSingleBookingSchedule,
    deleteBookingSchedule,
};
