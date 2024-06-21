import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import DashBoard from "../page/DashBoard";
import Session from "../page/Session";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/upload", element: <Home /> },
  { path: "/session", element: <Session /> },
  { path: "/view", element: <Home /> },
]);

export default router;
