import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import DashBoard from "../page/DashBoard";
import Session from "../page/Session";
import DashBoardLayout from "../component/layout/DashBoardLayout";
import DashboardSessions from "../page/DashBoard/page/Sessions";
import DashBoardDocuments from "../page/DashBoard/page/Documents";
import DashBoardChildrenLayout from "@/component/layout/\bDashBoardLayout/DashBoardChildrenLayout";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      { index: true, element: <DashBoard /> },
      {
        path: "",
        element: <DashBoardChildrenLayout />,
        children: [
          { path: "/dashboard/sessions", element: <DashboardSessions /> },
          { path: "/dashboard/documents", element: <DashBoardDocuments /> },
          { path: "/dashboard/drive", element: <Home /> },
        ],
      },
    ],
  },
  { path: "/upload", element: <Home /> },
  { path: "/session", element: <Session /> },
  { path: "/view", element: <Home /> },
]);

export default router;
