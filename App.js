import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import PlacesNavigator from "./navigation/PlacesNavigator";
import appReducer from "./store/reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initilized database");
  })
  .catch(() => {
    console.log("Initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
