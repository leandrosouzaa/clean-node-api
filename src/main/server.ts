import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './conifg/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./conifg/app')).default
    app.listen(env.port, () => console.log(`🤖  Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
