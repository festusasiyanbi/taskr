import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import UserProfile from "./profile/UserProfile.jsx"
import FourZeroFour from "./components/FourZeroFour.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute />,
    children: [
      {
        path: '/profile',
        element: <UserProfile />
      }
    ]
  },
  {
    path: "*",
    element: <FourZeroFour />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
