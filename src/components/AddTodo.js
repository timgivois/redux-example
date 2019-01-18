import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    const { submitTodo } = this.props

    submitTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className='add-todo' onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  submitTodo: todo => dispatch(addTodo(todo))
})

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)
