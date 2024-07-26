import React from 'react'
import TodoItem from './TodoItem'

// const todos = [1, 2, 3];
const TodoBody = ({todos, onUpdate}) => {
  return (
    <ul className='px-0 my-8'>
        {/* li태그를 todos 배열의 요소만큼 렌더링 */}
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate}/>)}
    </ul>
  )
}

export default TodoBody