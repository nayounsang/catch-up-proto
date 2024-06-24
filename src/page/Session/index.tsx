import { Box, Button, FormControl, Typography, styled } from "@mui/material";
import SessionDetailOption from "./component/SessionDetailOption";
import SessionTitleInput from "./component/SessionTitleInput";
import SessionFileSelect from "./component/SessionFileSelect";

export default function Session() {
  return (
    <Container>
      <InnerContainer>
        <FormControl sx={{ gap: "1rem" }}>
          <SessionTitleInput />
          <SessionDetailOption />
          <SessionFileSelect />
        </FormControl>
        <Button variant="contained" type="submit" size="large">
          <Typography>세션 시작</Typography>
        </Button>
      </InnerContainer>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",

  width: "100%",
  height: "100%",
}));

const InnerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  boxSizing: "border-box",
  padding: "4rem",
  width: "100%",
  maxWidth: "1024px",
}));
