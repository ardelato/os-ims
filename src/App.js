import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

//Actually need to go to /login
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact>
        <LoginPage></LoginPage>
      </Route>
    </BrowserRouter>
  );
};

export default App;
