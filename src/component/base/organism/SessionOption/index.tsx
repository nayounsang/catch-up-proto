import { Box, styled } from "@mui/material";
import SessionSort from "../../molecule/SessionSort";
import SessionSearch from "../../molecule/SessionSearch";
import SessionFilter from "../../molecule/SessionFilter";

export default function SessionOption() {
  return (
    <Container>
      <SessionSearch />
      <SessionSort />
      <SessionFilter/>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  height: "120px",
  width: "100%",
  borderBottom: "2px solid #ddd",
  alignItems: "flex-end",
  padding: "1rem 2rem",
  color: "white",
  gap: "1.5rem",
  marginBottom: "1rem",
}));
