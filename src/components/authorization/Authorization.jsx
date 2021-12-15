import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import s from "./Authorization.module.scss";
import { useDispatch } from "react-redux";
import { sign } from "../../redux/actions/Auth";

const Authorization = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");

  const [pass, setPass] = useState("");

  const signAuth = () => {
    dispatch(sign(login, pass));
  };
  return (
    <div className={s.authorization_main}>
      <div className={s.inputs}>
        <div className={s.img_main}>
          <img
            src="https://aspirationsschools.com/wp-content/uploads/2021/02/kisspng-computer-icons-user-clip-art-user-5abf13db5624e4.1771742215224718993529.png"
            alt=""
            className={s.avatar}
          />
        </div>
        <TextField
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          className={s.input}
        />
        <TextField
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          className={s.input}
          type={"password"}
        />
        <p className={s.prompt}>логин: admin, пароль: 12345</p>
        <Button variant="contained" onClick={signAuth}>
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Authorization;
