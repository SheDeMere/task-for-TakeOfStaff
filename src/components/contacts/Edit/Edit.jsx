import React, { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import s from "../Contacts.module.scss";
import { useDispatch } from "react-redux";
import { editContact } from "../../../redux/actions/Contacts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const Edit = ({ name, desc, img, id }) => {
  const dispatch = useDispatch();

  const [save, setSave] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [contact, setContact] = useState({ name: name, desc: desc, img: img });

  const sendData = () => {
    dispatch(editContact(contact.name, contact.desc, contact.img, id));
    setSave(true);

    setTimeout(() => {
      setSave(false);
    }, 1000);
    setTimeout(() => {
      setOpen(false);
    }, 1100);
  };

  return (
    <div className={s.edit}>
      <Button
        onClick={handleClickOpen}
        startIcon={<ManageAccountsIcon sx={{ fontSize: 15 }} />}
      >
        Изменить
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Изменить контакт {name}.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Внимание, изменения применятся сразу. Данные с сервера будут
            изменены!
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Имя"
            type="text"
            fullWidth
            variant="outlined"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <TextField
            margin="dense"
            id="name"
            label="Описание"
            type="text"
            fullWidth
            value={contact.desc}
            onChange={(e) => setContact({ ...contact, desc: e.target.value })}
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="name"
            label="Ссылка на фотографию"
            type="text"
            fullWidth
            value={contact.img}
            onChange={(e) => setContact({ ...contact, img: e.target.value })}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={sendData}>Сохранить</Button>
        </DialogActions>
        {save && <Alert severity="success">Сохранено!</Alert>}
      </Dialog>
    </div>
  );
};

export default Edit;
