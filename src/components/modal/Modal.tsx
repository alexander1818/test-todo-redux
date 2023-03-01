import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TTodosInitState } from '../../store/reducers/todoReducer';
import { TTodo } from '../../store/types';

const Modal: FC = () => {
  const { closeModalAction, toggleCheckboxAction } = useActions();
  const { selectedTodo, openModal } = useTypedSelector<TTodosInitState>(
    (state) => state.todosState
  );

  const handleChangeCheckbox = () => {
    selectedTodo.checked = !selectedTodo.checked;
    toggleCheckboxAction(selectedTodo);
  };

  const closeModal = (todo: TTodo) => {
    closeModalAction(todo);
  };

  return openModal ? (
    <div className="modalWrapper">
      <div className="modal">
        <h3>{selectedTodo.title}</h3>
        <h4>Description:</h4>
        <p>{selectedTodo.description}</p>
        <div>
          <label htmlFor="checkbox1">Status:</label>
          <input
            name={selectedTodo.id}
            type="checkbox"
            onChange={handleChangeCheckbox}
            id="checkbox1"
            checked={selectedTodo.checked}
          />
        </div>
        <button onClick={() => closeModal(selectedTodo)}>Close</button>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Modal;
