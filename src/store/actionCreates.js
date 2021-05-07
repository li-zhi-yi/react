import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
} from "./actionTpyes";

//inputValue
export const GetInputValue = (index) => ({
  type: CHANGE_INPUT_VALUE,
  value: index,
});

//list
export const GetTodoList = (index) => ({
  type: ADD_TODO_LIST,
});

//delete
export const DeleteTodoList = (index) => ({
  type: DELETE_TODO_LIST,
  value: index,
});
