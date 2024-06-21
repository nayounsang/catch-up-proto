import styled from "@emotion/styled";
import SessionFilter from "../molecule/SessionFilter";
import SessionSearch from "../molecule/SessionSearch";
import SessionSort from "../molecule/SessionSort";
import { Box } from "@mui/material";

export default function FileSelectOption() {
  return (
    <Container>
      <SessionSearch />
      <SessionSort />
      <SessionFilter />
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",

  width: "100%",
  borderBottom: "2px solid #ddd",
  alignItems: "flex-end",
  padding: "1rem 2rem",
  color: "white",
  gap: "1.5rem",
  marginBottom: "1rem",
}));
