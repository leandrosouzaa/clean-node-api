import request from 'supertest'
import app from '../conifg/app'

describe('SignUp Routes', () => {
  test('Shoud return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Any Name',
        email: 'any@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      })
      .expect(200)
  })
})
