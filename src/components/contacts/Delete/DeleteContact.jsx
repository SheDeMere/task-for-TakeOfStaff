import React from "react";
import { Button } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/actions/Contacts";

const DeleteContact = (id) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <Button
        onClick={handleDelete}
        startIcon={<PersonRemoveIcon sx={{ fontSize: 15 }} />}
      >
        Delete
      </Button>
    </div>
  );
};

export default DeleteContact;
