import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const userStyles = makeStyles({
  container: {
    //Styling the Container
    backgroundColor: "white",
    boxShadow: "0 0 3px 1px gray",
    width: "50%",
    height: "50vh",

    // Center align the content within the Container
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // Vertical and Horizontally aligning the Container
    // Had to add height 100% to index.html to act as parent reference height
    position: "absolute",
    top: "25%",
    left: "25%",
  },
});

const Login = () => {
  const classes = userStyles();
  return (
    <div>
      <Container className={classes.container}>Container</Container>
    </div>
  );
};

export default Login;
