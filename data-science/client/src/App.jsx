import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import IndexPage from "./pages/index";
import ConsolePage from "./pages/console";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/console" component={ConsolePage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
