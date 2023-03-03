import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './ModalSlice';
import SideBarSlice from './SideBarSlice';
const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
    toggle: SideBarSlice.reducer,
  },
});

export default store;
