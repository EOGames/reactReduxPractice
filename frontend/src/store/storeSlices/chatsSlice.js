import{createSlice} from '@reduxjs/toolkit';

const Chats = createSlice({
name:'Chats',
initialState:[],
reducers:{
    addChat(state,action)
    {
        state.push(action.payload);
    }
}
});
export const {addChat} = Chats.actions;
export default Chats;