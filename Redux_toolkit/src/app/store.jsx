// import { configureStore } from "@reduxjs/toolkit";
// import { TodoSlicer } from "../features/Todo";
// import Todos from "../component/Todos";



// export const store=configureStore({
//     reducer : {Todos: TodoSlicer}

// });


import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo';


export const store = configureStore({
    reducer: todoReducer
})