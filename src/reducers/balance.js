import { ADD_BALANCE, SUBTRACT_BALANCE } from '../actions/types'

const initialState = {
  balance: 0
}


export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BALANCE: {
      return {
        balance: state.balance + 1
      }
    }
    case SUBTRACT_BALANCE: {
      return {
        balance: state.balance - 1
      }
    }

    default:
      return state
  }
}
