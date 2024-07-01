import { Box, styled } from "@mui/material";
import SessionSort from "./SessionSort";
import SessionSearch from "./SessionSearch";
import SessionFilter from "./SessionFilter";

export default function SessionOption({
  marginBottom,
  height,
}: {
  marginBottom?: string;
  height?: string;
}) {
  return (
    <Container marginBottom={marginBottom} height={height}>
      <SessionSearch />
      <SessionSort />
      <SessionFilter />
    </Container>
  );
}

const Container = styled(Box)<{ marginBottom?: string; height?: string }>(
  ({ marginBottom = "1rem", height = "120px" }) => ({
    display: "flex",
    height: height,
    width: "100%",
    borderBottom: "2px solid #ddd",
    alignItems: "flex-end",
    padding: "1rem 2rem",
    color: "white",
    gap: "1.5rem",
    marginBottom: marginBottom,
  })
);
