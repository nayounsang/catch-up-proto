import { Outlet } from "react-router-dom";
import SessionOption from "./SessionOption";

export default function DashBoardChildrenLayout() {
  return (
    <>
      <SessionOption />
      <Outlet />
    </>
  );
}
