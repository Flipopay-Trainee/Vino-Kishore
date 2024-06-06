import { useState } from "react";

import "./App.css";
import Cart from "./Components/Cart";
import Welcome from "./Components/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/Welcome", element: <Welcome /> },
    { path: "/Cart", element: <Cart /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
