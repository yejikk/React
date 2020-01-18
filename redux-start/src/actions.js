// 액션 준비 코드

// 액션
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// payload가 있는 액션 생성자
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  };
}

// 액션
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

// 액션 생성자
export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});
