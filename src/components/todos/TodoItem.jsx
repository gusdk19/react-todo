import React, { useState } from 'react'
import IconButton from '@/components/ui/IconButton'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';
import { createPortal } from 'react-dom';

const TodoItem = ({todo, onUpdate, onDelete}) => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[todo.category] }</span>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ todo.title }</h2>
                <p className="mt-2 text-base text-gray-200">{ todo.summary }</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
          <IconButton onClick={() => setModal(true)} icon={'✏️'}/>
          <IconButton onClick={() => onDelete(todo.id)} textColor='text-red-300' icon={'🗑'} />
        </div>
        {modal && createPortal(
        <Modal onClose={closeModal}>
          <TodoForm todo={todo} onClose={closeModal} onUpdate={onUpdate}>Update Items</TodoForm>
        </Modal>, document.body)}
    </li>
  )
}

export default TodoItem