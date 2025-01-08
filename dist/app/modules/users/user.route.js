"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const ValidationRequest_1 = __importDefault(require("../../utils/ValidationRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/create-admin', (0, ValidationRequest_1.default)(user_validation_1.userValidation.createUserValidation), user_controller_1.userController.createUser);
router.post('/create-trainer', (0, ValidationRequest_1.default)(user_validation_1.userValidation.createUserValidation), user_controller_1.userController.createUser);
router.post('/create-user', (0, ValidationRequest_1.default)(user_validation_1.userValidation.createUserValidation), user_controller_1.userController.createUser);
router.get('/', user_controller_1.userController.retrieveAllUsers);
router.get('/:id', user_controller_1.userController.retrieveSingleUsers);
router.patch('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRoute = router;
