import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.register(transactionRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
