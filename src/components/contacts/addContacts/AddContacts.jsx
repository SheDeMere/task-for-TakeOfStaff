import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import s from "../Contacts.module.scss";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/actions/Contacts";
import AddIcon from "@mui/icons-material/Add";
const AddContacts = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({ name: "", desc: "", img: "" });

  const [save, setSave] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const idContact = useSelector((state) => state.Contacts.contacts);

  const id = idContact.length + 1;

  const sendData = () => {
    dispatch(addContact(contact.name, contact.desc, contact.img, id));
    setSave(true);
    setContact({ name: "", img: "", desc: "" });
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
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon sx={{ fontSize: 15 }} />}
      >
        Добавить
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить контакт.</DialogTitle>
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
        {save && <Alert severity="success">Контакт добавлен!</Alert>}
      </Dialog>
    </div>
  );
};

export default AddContacts;
