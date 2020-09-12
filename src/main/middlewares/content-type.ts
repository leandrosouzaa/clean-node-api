import { Request, Response, NextFunction } from 'express'

export const contentTye = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json')

  next()
}
