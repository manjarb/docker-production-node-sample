import { UPDATE_EMPLOYEES } from './actionTypes'
import axios from 'axios'

export const updateEmployees = payload => ({
  type: UPDATE_EMPLOYEES,
  payload
})

export const getEmployees = () => (dispatch) => {
  axios.get('/api/employees')
    .then((res) => {
      dispatch(updateEmployees(res.data.result))
    })
    .catch(e => {
      console.error(e)
    })
}