// index.html같은 곳에 작성했던 방식처럼 동일하게
import TodoFilter from './TodoFilter'

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = () => {
    return (
        <div className="flex items-center justify-between mb-2" id="task-control">
        <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
                data-cy="add-todo-button">Add Todo
        </button>
        <TodoFilter />
      </div> 
    )
}

export default TodoHeader;