"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthorizedError extends custom_error_1.CustomError {
    constructor() {
        super('用户没有授权');
        this.statusCode = 401;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: '用户没有授权' }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
