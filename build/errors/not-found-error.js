"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super('此页面不存在');
        this.statusCode = 404;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [
            { message: '此页面不存在' }
        ];
    }
}
exports.NotFoundError = NotFoundError;
