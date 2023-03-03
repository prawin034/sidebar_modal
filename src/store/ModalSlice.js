import { createSlice } from '@reduxjs/toolkit';

const Modal = createSlice({
  name: 'MODAL',
  initialState: { modal: false },
  reducers: {
    openModal(state) {
      state.modal = true;
    },

    closeModal(state) {
      state.modal = false;
    },
  },
});

export const ModalActions = Modal.actions;
export default Modal;
