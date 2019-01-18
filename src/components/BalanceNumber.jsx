import React from 'react'
import { connect } from 'react-redux'

import { getBalance } from '../selectors'

const BalanceNumber = ({ balanceAmount }) => (
  <div>
    {balanceAmount}
  </div>
)

const mapStateToProps = (state) => ({
  balanceAmount: getBalance(state)
})

export default connect(mapStateToProps)(BalanceNumber)
