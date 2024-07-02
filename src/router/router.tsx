import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import DashBoard from "../page/DashBoard";
import Session from "../page/Session";
import DashboardSessions from "../page/DashBoard/page/Sessions";
import DashBoardDocuments from "../page/DashBoard/page/Documents";
import DashBoardChildrenLayout from "@/component/layout/\bDashBoardLayout/DashBoardChildrenLayout";
import Drive from "@/page/DashBoard/page/Drive";
import DashBoardLayout from "@/component/layout/\bDashBoardLayout";
import View from "@/page/View";
import JoinSession from "@/page/JoinSession";

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
          { path: "/dashboard/drive", element: <Drive /> },
        ],
      },
    ],
  },
  { path: "/upload", element: <Home /> },
  { path: "/session", element: <Session /> },
  { path: "/view", element: <View /> },
  { path: "/join-session", element: <JoinSession /> },
]);

export default router;
