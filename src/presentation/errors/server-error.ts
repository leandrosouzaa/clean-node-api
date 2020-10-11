export class ServerError extends Error {
  constructor (stack) {
    super('Internal Server Error, try again')
    this.name = 'MissingParamError'
    this.stack = stack
  }
}
