import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'sidebarPosition',
  initialState: {
    value: "open",
  },
  reducers: {
    close: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "close";
    },
    open: state => {
      state.value = "open";
    },
   
  },
});

export const { close, open} = slice.actions;


export const selectsidebarPosition = state => state.sidebarPosition.value;

export default slice.reducer;
