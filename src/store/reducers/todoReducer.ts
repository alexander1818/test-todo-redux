import { TodoActions, TTodo, TTodoAction } from '../types';

export type TTodosInitState = {
  todos: TTodo[];
  todo: TTodo;
  selectedTodo: TTodo;
  openModal: boolean;
  isError: string;
};

const initialState: TTodosInitState = {
  todo: { id: '', title: '', description: '', checked: false },
  selectedTodo: { id: '', title: '', description: '', checked: false },
  todos: [],
  isError: '',
  openModal: false,
};

export const todoReducer = (state = initialState, action: TTodoAction) => {
  switch (action.type) {
    case TodoActions.CREATE_TODO:
      return { todos: [...state.todos, action.payload], isError: '' };
    case TodoActions.CREATE_TODO_ERROR:
      return { todos: [...state.todos], isError: action.payload };
    case TodoActions.SELECT_TODO:
      return {
        ...state,
        selectedTodo: { ...action.payload },
        isError: '',
        openModal: true,
      };
    case TodoActions.CLOSE_MODAL:
      // eslint-disable-next-line no-case-declarations
      const { title, description, checked, id } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const todos = state.todos.map((todo) => {
        if (todo.id == id) {
          todo.title = title;
          todo.description = description;
          todo.checked = checked;
        }
        return todo;
      });
      return { ...state, todos: [...todos], selectedTodo: {}, openModal: false, isError: '' };
    case TodoActions.TOGGLE_CHECKBOX:
      return { ...state, selectedTodo: { ...action.payload } };
    default:
      return state;
  }
};
