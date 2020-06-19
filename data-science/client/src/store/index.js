import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import modules from "./modules";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    modules.reducers,
    preloadedState,
    composedEnhancers
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./modules", () =>
      store.replaceReducer(modules.reducers)
    );
  }

  return store;
}

export const actions = {
  ...modules.actions,
};
