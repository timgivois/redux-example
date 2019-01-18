import React from 'react'
import { connect } from 'react-redux'

import { addBalance, subtractBalance } from '../actions'

const BalanceActions = ({ onAdd, onSubstract }) => (
  <div>
    <button onClick={onAdd} className="balance-button">Add 1</button>
    <button onClick={onSubstract} className="balance-button">Substract 1</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(addBalance()),
  onSubstract: () => dispatch(subtractBalance())
})

export default connect(null, mapDispatchToProps)(BalanceActions)
