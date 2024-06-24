import { Box, styled } from "@mui/material";
import SideBarMenu from "./SideBarMenu";
import SideBarInfo from "./SideBarInfo";
export default function SideBar() {
  return (
    <Container>
      <SideBarMenu />
      <SideBarInfo/>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  borderRight: "1px solid #ccc",
  width: "200px",
  padding: "0.75rem 0.25rem"
}));
