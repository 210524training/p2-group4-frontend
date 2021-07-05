import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import User from '../../models/user';
import { RootState } from "../store";

export type UserState = User | null;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null as UserState,
  },
  reducers: {
    login: (state, action: PayloadAction<User>) => {
       // axios response
       // if good ->
       state.value = action.payload;
    },
    logout: (state) => {
        state.value = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;