import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./Contacts.module.scss";
import Contacts from "./Contacts";
import AddContacts from "./addContacts/AddContacts";
import {CircularProgress} from "@mui/material";
import {getContacts} from "../../redux/actions/Contacts";

const Index = () => {
  const { contacts, loading } = useSelector((state) => state.Contacts);

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const sort = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(title);
  });

    useEffect(() => {
        dispatch(getContacts());
    }, []);

  return (
    <div>
      <div className={s.top_inputs}>
        <input
          type="text"
          value={title}
          placeholder="Поиск..."
          className={s.search_input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <AddContacts />
      </div>
      <div className={s.contacts}>
        {loading ?
            <div className={s.preloader}>
                <CircularProgress />
            </div>
            :
            sort.map((contact) => {
          return <Contacts contact={contact} key={contact.id} />;
        })}
      </div>
    </div>
  );
};

export default Index;
