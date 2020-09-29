import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

//Actually need to go to /login
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact>
        <LoginPage></LoginPage>
      </Route>
      <Route path="/signup" exact>
        <SignupPage></SignupPage>
      </Route>
    </BrowserRouter>
  );
};

export default App;
