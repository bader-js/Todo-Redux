import {
  CHANGETODO,
  ADDTODO,
  COMPLETETODO,
  REMOVETODO,
  EDITINPUTTODO,
  EDITTODO,
  SAVEEDIT,
} from '../actions/actionconst';

const inialState = {
  task: '',
  tasklist: [],
  iscompleted: [],
  isedited: [],
  edittask: ''
};
const reducer = (state = inialState, action) => {
  switch (action.type) {
    case CHANGETODO:
      return { ...state, task: action.event.target.value };

    case ADDTODO:
      return state.task.trim() !== ''
        ? {
            ...state,
            task: '',
            tasklist: [...state.tasklist, state.task],
            iscompleted: [...state.iscompleted, false],
            isedited: [...state.isedited, false]
          }
        : { ...state };

    case COMPLETETODO:
      let arr1 = [...state.iscompleted];
      arr1[action.index] = !state.iscompleted[action.index];
      return { ...state, iscompleted: arr1 };

    case REMOVETODO:
      return {
        ...state,
        tasklist: state.tasklist.filter(
          (task, index) => index !== action.payload
        ),
        iscompleted: state.iscompleted.filter(
          (task, index) => index !== action.payload
        )
      };

    case EDITTODO:
      let arr2 = [...state.isedited];
      arr2[action.index] = true;
      return { ...state, isedited: arr2 };

    case EDITINPUTTODO:
      return { ...state, edittask: action.payload.target.value };

   

    case SAVEEDIT:
      let arr3 = [...state.tasklist];
      state.edittask.trim() &&
        (arr3[state.isedited.indexOf(true)] = state.edittask);

      console.log(arr3);
      return {
        ...state,
        tasklist: arr3,
        edittask: '',
        isedited: state.isedited.map(e => (e = false))
      };
  }

  return state;
};

export default reducer;