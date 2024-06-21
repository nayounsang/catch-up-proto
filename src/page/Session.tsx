import { Box, Button, FormControl, Typography, styled } from "@mui/material";
import SessionAuthOption from "../component/molecule/SessionAuthOption";
import SessionTitleInput from "../component/atom/SessionTitleInput";

export default function Session() {
  return (
    <Container>
      <InnerContainer>
        <FormControl sx={{ gap: "1rem" }}>
          <SessionTitleInput />
          <SessionAuthOption />
          <Box display="flex"></Box>
        </FormControl>
        <Box display="flex" gap="3rem">
          <Button variant="contained" type="submit">
            <Typography>세션 시작</Typography>
          </Button>
          <Button variant="contained" type="submit" color="error">
            <Typography>세션 삭제</Typography>
          </Button>
        </Box>
      </InnerContainer>{" "}
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
  maxWidth: "800px",
}));
