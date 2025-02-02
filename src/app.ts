import express, { Request, Response } from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './app/routers'
import GlobalErrorHandler from './app/middlewares/GlobalErrorHandler'
import NotFoundErrorHandler from './app/middlewares/NotFoundErrorHandler'

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/api', router)

app.use(GlobalErrorHandler)
app.use(NotFoundErrorHandler)

export default app
