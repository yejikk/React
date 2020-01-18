import { createStore } from "redux";
import { todoApp } from "./reducers";
import { addTodo } from "./actions";

export const store = createStore(todoApp);

console.log(store);
console.log(store.getState());

// store.dispatch(addTodo("API 만들기"));
// console.log(store.getState());

// store.subscribe();
