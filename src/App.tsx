import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import WizardPage from "./pages/wizard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/wizard",
    element: <WizardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
