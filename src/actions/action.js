import {
  CHANGETODO,
  ADDTODO,
  COMPLETETODO,
  REMOVETODO,
  EDITINPUTTODO,
  EDITTODO,
 
  SAVEEDIT
} from '../actions/actionconst';

export const changeTodo = event => {
  return { type: CHANGETODO, event };
};


export const addTodo = () => {
  return { type: ADDTODO };
};


export const completeTodo = index => {
  return { type: COMPLETETODO, index };
};


export const removeTodo = payload => {
  return { type: REMOVETODO, payload };
};


export const editinputTodo = payload => {
  return { type: EDITINPUTTODO, payload };
};


export const editTodo = index => {
  return { type: EDITTODO, index };
};


export const cancelEdit = () => {
  return { type: EDITINPUTTODO};
};


export const saveEdit = () => {
  return { type: SAVEEDIT };
};
