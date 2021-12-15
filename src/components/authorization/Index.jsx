import React from "react";
import Authorization from "./Authorization";
import s from "./Authorization.module.scss";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
const Index = () => {
  const { error } = useSelector((state) => state.Auth);
  return (
    <div className={s.auth}>
      {error && (
        <Alert className={s.error} severity="error">
          Неправильный логин или пароль!
        </Alert>
      )}
      <Authorization />
    </div>
  );
};

export default Index;
