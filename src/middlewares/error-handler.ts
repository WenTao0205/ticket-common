import { Request, Response, NextFunction } from "express"
import { CustomError } from "../errors/custom-error"

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  console.log(err)
  // 处理未知错误
  res.status(400).send({
    errors: [{ message: '发生未知错误' }]
  })
}