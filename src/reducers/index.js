import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_INPUT,
  APPLY_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 10,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

const calculateMemoryAction = (stateTotal, memoryId, currentMemory) => {
  switch (memoryId) {
    case "MC":
      return 0;

    case "M+":
      return stateTotal;

    case "MR":
      return currentMemory;

    default:
      return stateTotal;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    case APPLY_MEMORY:
      return {
        ...state,
        memory: calculateMemoryAction(
          state.total,
          action.payload,
          state.memory
        ),
        total:
          action.payload === "MR"
            ? calculateResult(state.total, state.memory, state.operation)
            : state.total,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_INPUT:
      return {
        ...state,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
