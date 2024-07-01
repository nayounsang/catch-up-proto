import { Outlet } from "react-router-dom";
import SessionOption from "../../base/organism/SessionOption";

export default function DashBoardChildrenLayout() {
  return (
    <>
      <SessionOption />
      <Outlet />
    </>
  );
}
