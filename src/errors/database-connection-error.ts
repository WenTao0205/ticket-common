import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
  private reason = '数据库连接错误'
  public statusCode = 500

  constructor() {
    super('数据库连接错误')

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}