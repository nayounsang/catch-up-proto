import { styled } from "@mui/material";
import SideBar from "../component/template/SideBar";

export default function DashBoard() {
  return (
    <>
      <Container>
        <SideBar/>
      </Container>
    </>
  );
}

const Container = styled("section")(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
}));