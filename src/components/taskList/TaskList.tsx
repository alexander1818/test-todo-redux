import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TTodosInitState } from '../../store/reducers/todoReducer';
import { TTodo } from '../../store/types';

const TaskList: FC = () => {
  const { selectTodoAction } = useActions();
  const { todos } = useTypedSelector<TTodosInitState>((state) => state.todosState);

  const selectTodo = (todo: TTodo) => {
    selectTodoAction(todo);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {' '}
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo: TTodo, index: number) => (
              <tr key={todo.id} onClick={() => selectTodo(todo)}>
                {' '}
                <td>{index + 1}</td>
                <td>
                  {' '}
                  <div className="short-text"> {todo.title}</div>
                </td>
                <td>
                  {' '}
                  <div className="short-text">{todo.description}</div>{' '}
                </td>
                <td>
                  <input type="checkbox" name="checkbox" required={true} checked={todo.checked} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
