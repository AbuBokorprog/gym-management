"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const GlobalErrorHandler = (err, req, res, next) => {
    const status = err.status || http_status_1.default.BAD_REQUEST;
    const message = err.message || 'Something went wrong!';
    const errorResponse = {
        success: false,
        status,
        message,
        // error: config.node_env === 'development' ? err : message, // Uncomment if using `config`
    };
    res.status(status).json(errorResponse);
};
exports.default = GlobalErrorHandler;
