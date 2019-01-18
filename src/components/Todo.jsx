import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { toggleTodo } from '../actions'

const Todo = ({ todo, changeTodo }) => (
  <li className='todo-item' onClick={() => changeTodo(todo.id)}>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span
      className={cx(
        'todo-item__text',
        todo && todo.completed && 'todo-item__text--completed'
      )}
    >
      {todo.content}
    </span>
  </li>
)

const mapDispatchToProps = dispatch => ({
  changeTodo: (id) =>  dispatch(toggleTodo(id))
})

export default connect(
  null,
  mapDispatchToProps,
)(Todo)
