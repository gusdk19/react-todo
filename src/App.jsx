import { useState } from "react"
import TodoBody from "./components/todos/TodoBody"
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {

  const [todos, setTodos] = useState(dummyTodos);

  const addTodoHandler = ({title, summary, category}) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category
    }
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => updateTodo.id === todo.id ? updateTodo : todo);
    setTodos(updatedTodos);
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(todo => id !== todo.id))
  }

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/" className='flex'>
              <h1 className='py-8 text-red-200 max-w-max text-7xl'>todos
              </h1>
              <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png" alt="Cat with Wry Smile" width="50" height="50" />
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          <TodoHeader onAdd={addTodoHandler}/>
          <TodoBody todos={todos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler}/>
        </section>
      </DefaultLayout>
    </>
  )
}

export default App