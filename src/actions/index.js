export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const MEMORY_PLUS="MEMORY_PLUS";
export const MEMORY_REPLACE="MEMORY_REPLACE";
export const MEMORY_CLEAR="MEMORY_CLEAR";

export const addOne = (reducerAction) => {
  reducerAction ({ type: ADD_ONE });
}

export const applyNumber = (reducerAction,number) => {
  reducerAction ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation=(reducerAction,operation)=>{
  reducerAction({type:CHANGE_OPERATION , payload:operation})
}

export const clearDisplay=(reducerAction)=>{
  reducerAction({type:CLEAR_DISPLAY})
}

export const memoryPlus=(reducerAction)=>{
  reducerAction({type:MEMORY_PLUS})
}

export const memoryReplace=(reducerAction)=>{
  reducerAction({type:MEMORY_REPLACE})
}

export const memoryClear=(reducerAction)=>{
  reducerAction({type:MEMORY_CLEAR})
}