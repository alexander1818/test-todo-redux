import { Dispatch } from 'redux';
import { TodoActions, TTodo, TTodoAction } from '../types';

export const createTodoAction = (todo: TTodo) => {
  return async (dispatch: Dispatch<TTodoAction>) => {
    try {
      dispatch({ type: TodoActions.CREATE_TODO, payload: todo });
    } catch (e) {
      dispatch({ type: TodoActions.CREATE_TODO_ERROR, payload: e as string });
    }
  };
};

export const selectTodoAction = (todo: TTodo) => {
  return async (dispatch: Dispatch<TTodoAction>) => {
    dispatch({ type: TodoActions.SELECT_TODO, payload: todo });
  };
};

export const closeModalAction = (todo: TTodo) => {
  return (dispatch: Dispatch<TTodoAction>) => {
    dispatch({ type: TodoActions.CLOSE_MODAL, payload: todo });
  };
};

export const toggleCheckboxAction = (payload: TTodo) => {
  return (dispatch: Dispatch<TTodoAction>) => {
    dispatch({ type: TodoActions.TOGGLE_CHECKBOX, payload });
  };
};
