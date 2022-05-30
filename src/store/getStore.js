import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function getStore(reducer) {
  const store = createStore(reducer, initialState, composedEnhancers);
  return store;
}
