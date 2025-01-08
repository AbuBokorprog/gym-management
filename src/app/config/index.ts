import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
  refresh_in: process.env.REFRESH_EXPIRES_IN,
  access_in: process.env.EXPIRES_IN,
  salt: process.env.SALT,
}
