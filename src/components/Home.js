import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ModalActions } from '../store/ModalSlice';
import { ToggleActions } from '../store/SideBarSlice';
const Home = () => {
  const dispatch = useDispatch();

  const ModalOpen = () => {
    dispatch(ModalActions.openModal());
  };

  const ToggleOpen = () => {
    dispatch(ToggleActions.toggleOpen());
  };
  return (
    <main>
      <button onClick={ToggleOpen} className="sidebar_btn">
        <FaBars />
      </button>
      <button className="modal_btn" onClick={ModalOpen}>
        MODAL
      </button>
    </main>
  );
};

export default Home;
