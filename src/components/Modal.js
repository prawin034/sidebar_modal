import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ModalActions } from '../store/ModalSlice';
const Modal = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();
  const ModalClose = () => {
    dispatch(ModalActions.closeModal());
  };
  return (
    <div className={`${modal ? 'modal_overlay show-modal' : 'modal_overlay'}`}>
      <div className="modal_container">
        <h1>MODAL CONTENT</h1>
        <button onClick={ModalClose} className="modal_close">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
