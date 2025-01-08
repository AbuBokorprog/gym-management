"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/users/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        router: user_route_1.userRoute,
    },
    //   {
    //     path: '/borrow',
    //     route: borrowRecordRouter,
    //   },
    //   {
    //     path: '/return',
    //     route: returnRouter,
    //   },
];
moduleRoutes.forEach(route => router.use(route.path, route.router));
exports.default = router;
