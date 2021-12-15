import React from "react";
import s from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/Auth";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={s.header}>
      <p>Take of staff</p>
      <button onClick={handleClick} className={s.logout}>
        Выйти
      </button>
    </div>
  );
};

export default Header;
