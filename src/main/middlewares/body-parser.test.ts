import request from 'supertest'
import app from '../conifg/app'

describe('Body Parser Middleware', () => {
  test('Should parser json body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Any_Name' })
      .expect({ name: 'Any_Name' })
  })
})
