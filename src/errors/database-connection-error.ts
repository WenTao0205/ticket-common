import { CustomError } from "./custom-error"

export class DatabaseConnectionError extends CustomError {
  private reason = 'Error connecting to database'
  public statusCode = 500

  constructor() {
    super('Error connecting to database')

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}