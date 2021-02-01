import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as actions from "./actions/session_action"
import {createCartedItem} from "./util/carted_items_util"
document.addEventListener("DOMContentLoaded", () => {
  // debugger
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
    window.createNewUser = actions.createNewUser
    window.login = actions.login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createCartedItem = createCartedItem;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});