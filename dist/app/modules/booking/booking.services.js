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
exports.bookingServices = void 0;
const prisma_1 = __importDefault(require("../../helpers/prisma"));
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const createBookingSchedule = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.classSchedule.create({
        data: payload,
    });
    return data;
});
const retrieveAllBookingSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.classSchedule.findMany({});
    return data;
});
const retrieveSingleBookingSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.classSchedule.findUnique({
        where: {
            id: id,
        },
    });
    if (!data) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'classSchedule not found!');
    }
    return data;
});
const updateBookingSchedule = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistBookingSchedule = yield prisma_1.default.classSchedule.findUnique({
        where: { id },
    });
    if (!isExistBookingSchedule) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'classSchedule not found!');
    }
    const data = yield prisma_1.default.classSchedule.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return data;
});
const deleteBookingSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.classSchedule.delete({
        where: { id },
    });
    if (!data) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'classSchedule delete failed!');
    }
    return data;
});
exports.bookingServices = {
    createBookingSchedule,
    retrieveAllBookingSchedule,
    updateBookingSchedule,
    deleteBookingSchedule,
    retrieveSingleBookingSchedule,
};
