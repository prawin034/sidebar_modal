import { createSlice } from '@reduxjs/toolkit';

const initalstate = { toggle: false };
const Toggle = createSlice({
  name: 'TOGGLE-SIDEBAR',
  initialState: initalstate,
  reducers: {
    toggleOpen(state) {
      state.toggle = true;
    },
    toggleClose(state) {
      state.toggle = false;
    },
  },
});

export const ToggleActions = Toggle.actions;
export default Toggle;
