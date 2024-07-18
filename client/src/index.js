import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { CreateContainer, MainContainer } from "./components";
import Errorpage from "./components/Errorpage";
import "./index.css";
import Cart from "./page/Cart";
import MenuPage from "./page/MenuPage";
import MenuStatic from "./page/MenuStatic";
import store from "./redux";

import Canceled from "./page/Canceled";
import Success from "./page/Success";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Errorpage errorCode={404} />}>
      <Route
      
        path="/"
        element={<MainContainer />}
        errorElement={<Errorpage errorCode={400} />}
      />
      <Route path="/menu" element={<MenuStatic />} />
      <Route path="/menu/:productId" element={<MenuPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/createitem" element={<CreateContainer />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/Canceled" element={<Canceled />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
