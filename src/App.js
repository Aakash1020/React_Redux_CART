import React from "react";
import reducer from "./reducer";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
