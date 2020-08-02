export class ServerError extends Error {
  constructor () {
    super('Internal Server Error, try again')
    this.name = 'MissingParamError'
  }
}
