import React from "react";
import s from "./Contacts.module.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MenuCard from "./Menu/MenuCard";

const Contacts = ({ contact }) => {
  return (
    <div className={s.contact}>
      <Card sx={{ maxWidth: 200 }} className={s.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={contact.img}
            alt="photo people"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {contact.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {contact.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className={s.change_button}>
          <MenuCard
            name={contact.name}
            img={contact.img}
            desc={contact.desc}
            id={contact.id}
          />
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
