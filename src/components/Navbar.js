import React from 'react';
import logo from '.././logo.svg';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToggleActions } from '../store/SideBarSlice';

const Navbar = () => {
  const toggle = useSelector((state) => state.toggle.toggle);

  const dispatch = useDispatch();

  const ToggleCLose = () => {
    dispatch(ToggleActions.toggleClose());
  };
  return (
    <aside
      className={`${toggle ? 'sidebar_toggle toggle_open' : 'sidebar_toggle'}`}
    >
      <div className="sidebar_header">
        <img className="sidebar_header_img" src={logo} alt="logo" />
        <button onClick={ToggleCLose} className="sidebar_toggle_close">
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar_links">
        {links.map((link) => {
          const { id, icon, text, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social_icons">
        {social.map((icons) => {
          const { icon, id, url } = icons;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navbar;
