// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   Todos: [
//     {
//       id: 1,
//       text: "hello world",
//     },
//   ],
// };

// // making the slicer 
// export const TodoSlicer = createSlice({
//   name: "Todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.Todos.push(todo)
//     },
    
//     removeTodo: (state,action) => {
//         state.Todos=state.Todos.filter((todo)=> {
//             todo.id !== action.payload.id
//         })
//     }

//   },
// });

// // exporting the neccesary functionailty and reducer 

// export const {addTodo, removeTodo}=TodoSlicer.actions

// export default TodoSlicer.reducer




import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer




