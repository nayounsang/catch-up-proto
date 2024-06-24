import { Typography, styled } from "@mui/material";
import Start from "./component/Start";

export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h2" fontWeight="bold">캐치업</Typography>
        <Start/>
      </Container>
    </>
  );
}

const Container = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
}));