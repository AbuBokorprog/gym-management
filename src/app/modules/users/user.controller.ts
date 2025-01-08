import httpStatus from 'http-status'
import CatchAsync from '../../utils/CatchAsync'
import SuccessResponse from '../../utils/SuccessResponse'
import { userServices } from './user.services'

const createUser = CatchAsync(async (req, res) => {
  const data = await userServices.createUser(req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Create user successfully!',
    data,
  })
})
const retrieveAllUsers = CatchAsync(async (req, res) => {
  const data = await userServices.retrieveAllUsers()

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve all users successfully!',
    data,
  })
})
const retrieveSingleUsers = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await userServices.retrieveSingleUsers(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve user successfully!',
    data,
  })
})
const updateUser = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await userServices.updateUser(id, req.body)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Update user successfully!',
    data,
  })
})
const deleteUser = CatchAsync(async (req, res) => {
  const { id } = req.params
  const data = await userServices.deleteUser(id)

  SuccessResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Delete user successfully!',
    data,
  })
})

export const userController = {
  createUser,
  retrieveAllUsers,
  updateUser,
  retrieveSingleUsers,
  deleteUser,
}
