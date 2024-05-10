// import { useState } from 'react'
import Loginpage from "./Loginpage";
import Signup from "./Signup";
import Chatbot from "./Components/Chatbot";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Signup /> },
    { path: "/login", element: <Loginpage /> },
    { path :"/chatbot", element: <Chatbot />}
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
