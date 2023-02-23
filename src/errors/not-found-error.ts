import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor() {
    super('此页面不存在')

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [
      { message: '此页面不存在' }
    ]
  }
}