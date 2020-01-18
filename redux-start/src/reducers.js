import { ADD_TODO, COMPLETE_TODO, START_LOADING, END_LOADING } from "./actions";

const initialTodos = [];
const initialLoading = false;

export function loading(previousState = initialLoading, action) {
  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [
        ...previousState,
        {
          text: action.text,
          createAt: new Date().toISOString(),
          done: false
        }
      ]
    };
  } else if (action.type === COMPLETE_TODO) {
    console.log(action);
    const { index } = action;
    // 원래 state에 index 번째 있는 객체의 done을 true로 바꾸고, 새로운 배열을 리턴
    const newState = { ...previousState };
    newState[index] = {
      ...newState[index],
      done: true
    };
    return newState;
  } else if (action.type === START_LOADING) {
    return {
      ...previousState,
      isLoading: true
    };
  } else if (action.type === END_LOADING) {
    return {
      ...previousState,
      isLoading: false
    };
  }
  return previousState;
}

// previousState가 undefined이면 initialState값이 들어가게 된다.
export function todo(previousState = initialState, action) {
  // if (previousState === undefined) {
  //   // 최초
  //   return [];
  // }
  if (action.type === ADD_TODO) {
    return {
      ...previousState.todos,
      todos: [
        ...previousState,
        {
          text: action.text,
          createAt: new Date().toISOString(),
          done: false
        }
      ]
    };
  } else if (action.type === COMPLETE_TODO) {
    console.log(action);
    const { index } = action;
    // 원래 state에 index 번째 있는 객체의 done을 true로 바꾸고, 새로운 배열을 리턴
    const newState = { ...previousState };
    newState.todos[index] = {
      ...newState.todos[index],
      done: true
    };
    return newState;
  } else if (action.type === START_LOADING) {
    return {
      ...previousState,
      isLoading: true
    };
  } else if (action.type === END_LOADING) {
    return {
      ...previousState,
      isLoading: false
    };
  }
  return previousState;
}
