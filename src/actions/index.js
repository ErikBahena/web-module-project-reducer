export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_INPUT = "CLEAR_INPUT";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const applyMemory = (memoryId) => {
  return { type: APPLY_MEMORY, payload: memoryId };
};

export const changeOperation = (newOperator) => {
  return { type: CHANGE_OPERATION, payload: newOperator };
};

export const clearInput = () => {
  return { type: CLEAR_INPUT };
};
