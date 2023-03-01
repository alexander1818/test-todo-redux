export enum TodoActions {
  SHOW_MODAL = 'SHOW_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  CREATE_TODO = 'CREATE_TODO',
  CREATE_TODO_ERROR = 'CREATE_TODO_ERROR',
  SELECT_TODO = 'SELECT_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX',
}

export type TTodo = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};

export type TTodoActionCreate = {
  type: TodoActions.CREATE_TODO;
  payload: TTodo;
};

export type TTodoActionError = {
  type: TodoActions.CREATE_TODO_ERROR;
  payload: string;
};

export type TTodoActionSelect = {
  type: TodoActions.SELECT_TODO;
  payload: TTodo;
};

export type TTodoActionModal = {
  type: TodoActions.CLOSE_MODAL;
  payload: TTodo;
};

export type TToggleCheckboxAction = {
  type: TodoActions.TOGGLE_CHECKBOX;
  payload: TTodo;
};

export type TUpdateAction = {
  type: TodoActions.UPDATE_TODO;
  payload: TTodo;
};

export type TTodoAction =
  | TTodoActionCreate
  | TTodoActionError
  | TTodoActionSelect
  | TTodoActionModal
  | TToggleCheckboxAction
  | TUpdateAction;
