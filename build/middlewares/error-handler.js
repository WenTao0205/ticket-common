"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.log(err);
    // 处理未知错误
    res.status(400).send({
        errors: [{ message: '发生未知错误' }]
    });
};
exports.errorHandler = errorHandler;
