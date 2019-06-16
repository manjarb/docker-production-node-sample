import { UPDATE_EMPLOYEES } from '../actions/actionTypes'

const employees = (state = [], action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES:
      return action.payload
    default:
      return state
  }
}

export default employees