import { styled } from "@mui/material";
import SideBar from "../component/template/SideBar";
import SessionView from "../component/template/SessionView";

export default function DashBoard() {
  return (
    <>
      <Container>
        <SideBar/>
        <SessionView/>
      </Container>
    </>
  );
}

const Container = styled("section")(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
}));