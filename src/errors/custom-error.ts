export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)

    // 继承内置类需要加这一段代码
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeErrors(): { message: string; field?: string }[]
}