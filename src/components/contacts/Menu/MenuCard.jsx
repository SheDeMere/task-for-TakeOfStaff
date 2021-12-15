import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import s from "../Contacts.module.scss";
import Edit from "../Edit/Edit";
import DeleteContact from "../Delete/DeleteContact";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const MenuCard = ({ name, img, desc, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={s.change_button}
      >
        <MoreVertIcon sx={{ backgroundColor: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Edit name={name} img={img} desc={desc} id={id} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteContact id={id} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuCard;
