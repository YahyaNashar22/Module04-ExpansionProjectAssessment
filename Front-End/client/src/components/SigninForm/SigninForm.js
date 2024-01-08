import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, FormControl } from "@mui/material";
import show from "../../assets/show 1.png";
import hide from "../../assets/hide.svg";
import style from "./SigninForm.module.css";

function SigninForm() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  // FORM DATA HANDLING
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // PASSWORD SHOW/HIDE
  let openClose = "";
  let type = "password";
  const [visible, setVisible] = useState(false);
  if (visible) {
    openClose = hide;
    type = "text";
  } else {
    openClose = show;
    type = "password";
  }
  const passHandler = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  // PENDING SCREEN
  const [isPending, setIsPending] = useState(false);
  return (
    <div className={style.wrapper}>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "32px", marginBottom: "10px" }}
        className={style.header}
      >
        Log in to Exclusive
      </Typography>
    </div>
  );
}

export default SigninForm;
