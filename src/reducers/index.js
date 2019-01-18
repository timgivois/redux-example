import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import todos from './todos'
import balance from './balance'

export default combineReducers({
  todos,
  visibilityFilter,
  balance
})
