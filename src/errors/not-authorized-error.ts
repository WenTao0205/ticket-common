import { CustomError } from "./custom-error"

export class NotAuthorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('用户没有授权')

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: '用户没有授权' }]
  }
}