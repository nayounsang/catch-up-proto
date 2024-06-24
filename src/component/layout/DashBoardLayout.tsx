import { Box, styled } from "@mui/material";
import SideBar from "../organism/SideBar";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  return (
    <Container>
      <SideBar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Container>
  );
}

const Container = styled("section")(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
}));
