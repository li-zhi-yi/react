import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
} from "./actionTpyes";

const defalutState = {
  inputValue: "",
  list: ["hello world"],
};

export default (state = defalutState, action) => {
    //inputVlue
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    //list
    if(action.type===ADD_TODO_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        if(newState.inputValue===""){
            return newState;
        }
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    //del
    if(action.type===DELETE_TODO_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }
  return state;
};
