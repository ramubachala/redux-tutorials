import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo onClick={() => onTodoClick(index)} key={index} {...todo} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
