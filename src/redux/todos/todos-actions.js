import types from './todos-types';
import { nanoid } from 'nanoid';

const addTodo = text => ({
  type: types.ADD,
  payload: { id: nanoid(), text, completed: false },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addTodo, deleteTodo, changeFilter };
