import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StoreProvider from "./stores/Store";
import Landing from "./components/landing";
import Page2 from "./components/page2";
const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/page2" exact component={Page2} />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
