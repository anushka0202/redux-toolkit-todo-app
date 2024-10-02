import { createSlice, nanoid } from "@reduxjs/toolkit";

//intial state can be anything (arrays, obj etc.)
//it can also be a some fetching of database and storing it here
const initialState = {
  todos: [{ id: 1, text: "Hello" }],
};

//first we need to provide the name of the slice, since slice can be denoting anything. one can be denoting authentication. other can denote projects stc.
//then we provide intialState to the slice so that somebody can actually track whats on the initial position
//them we rpovide reducers which is an object
//we pass state and action(thru this we can send some data.for eg to delete smth we need to pass an id(payload)) to the reducers
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //creating a single todo
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//exporting all the methods in the and reducers as actions
export const { addTodo, removeTodo } = todoSlice.actions;

//exporting the entire reducer
//this needs to be wired up with the store
export default todoSlice.reducer;
