import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log'

describe('Log Mongo Repository', () => {
  let errorsCollection: Collection

  const makeSut = (): LogMongoRepository => {
    return new LogMongoRepository()
  }

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorsCollection = await MongoHelper.getCollection('errors')
    await errorsCollection.deleteMany({})
  })

  test('Should create an error log on successs', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorsCollection.countDocuments()
    expect(count).toBe(1)
  })
})
