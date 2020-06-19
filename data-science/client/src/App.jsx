import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import configureStore from "./store";

import IndexPage from "./pages/index";
import ConsolePage from "./pages/console";

const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/console" component={ConsolePage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
