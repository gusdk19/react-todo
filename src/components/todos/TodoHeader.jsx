// index.html같은 곳에 작성했던 방식처럼 동일하게
import { useState } from 'react';
import { createPortal } from 'react-dom'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm';
import Modal from '../ui/Modal';

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = ({onAdd, category, onFilter}) => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
              data-cy="add-todo-button" onClick={() => setModal(true)}>Add Todo
      </button>
      {/* 모달 호출 */}
      {modal && createPortal(
        <Modal onClose={closeModal}>
          <TodoForm onAdd={onAdd} onClose={closeModal}>Add Items</TodoForm>
        </Modal>, document.body)}
      <TodoFilter category={category} onFilter={onFilter}/>
    </div>
  )
}

export default TodoHeader;