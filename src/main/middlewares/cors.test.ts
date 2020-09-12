import request from 'supertest'
import app from '../conifg/app'

describe('CORS Middleware Test', () => {
  test('Shoud enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_body_parser')
      .expect('acess-control-allow-origin', '*')
      .expect('acess-control-allow-methods', '*')
      .expect('acess-control-allow-headers', '*')
  })
})
