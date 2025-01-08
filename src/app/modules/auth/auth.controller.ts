import httpStatus from 'http-status'
import config from '../../config'
import CatchAsync from '../../utils/CatchAsync'
import SuccessResponse from '../../utils/SuccessResponse'
import { authServices } from './auth.services'

const userLogin = CatchAsync(async (req, res) => {
  const data = await authServices.userLogin(req.body)

  const { refreshToken } = data

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  })

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Login successfully!',
    data,
  })
})

export const authController = { userLogin }
