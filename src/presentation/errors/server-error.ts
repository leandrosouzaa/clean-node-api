export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal Server Error, try again')
    this.name = 'ServerError'
    this.stack = stack
  }
}
