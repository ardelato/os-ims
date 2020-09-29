import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Form Components
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, TextField } from "@material-ui/core";

const userStyles = makeStyles({
  container: {
    //Styling the Container
    backgroundColor: "white",
    boxShadow: "0 0 3px 1px gray",
    width: "50%",
    height: "50vh",

    // Center align the content within the Container
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // Vertically and Horizontally aligning the Container
    // Had to add height 100% to index.html to act as parent reference height
    position: "absolute",
    top: "25%",
    left: "25%",
  },
});

const Login = () => {
  const classes = userStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Container className={classes.container}>
        <h1 id="signup-text">Signup</h1>
        <form></form>
        <p>
          <small>
            Already have an account?, <a href="/Login">Login here</a>
          </small>
        </p>
        <Button variant="contained" disableElevation>
          Signup
        </Button>
      </Container>
    </div>
  );
};

export default Login;
