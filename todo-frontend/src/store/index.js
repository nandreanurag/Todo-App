import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = {
  items: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    // called when user lands on initial todo page
    replaceTodo(state, action) {
      console.log(action)
      state.items = action.payload.items
    },
     //updating state when ever item is added
    addItemToTodo(state, action) {
      const newitem = action.payload.items
      state.items.push({
        _id: newitem.id,
        title: newitem.title,
        description: newitem.description,
        duedate: newitem.duedate,
        status:false
      })
    },
    //updating state when ever item is changed/updated
    updateItemInTodo(state, action) {
      const newitem = action.payload.items
      const filtered_item=state.items.find(item=>item._id===newitem._id)
      filtered_item.title=newitem.title
      filtered_item.description=newitem.description
      filtered_item.duedate=newitem.duedate
      if(action.payload.role==='updateStatus')
      filtered_item.status=newitem.status
    },
    // updating state when ever item is removed
    removeItemFromTodo(state, action) {
      const id = action.payload.id
      state.items = state.items.filter(item => item._id != id)
    }
  }
});

// todo related events will be under todo reducer 

const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});

export const todoActions = todoSlice.actions;


export default store;
