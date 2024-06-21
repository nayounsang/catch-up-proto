import { Box, Button, Link, Typography, styled } from "@mui/material";
import BrandLogo from "../atom/BrandLogo";

export default function Start() {
  return (
    <Container>
      <BrandLogo width={200} height={200}/>
      <Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Text>
        <Link href="/login">
          <StartButton variant="contained">
            <Typography>로그인</Typography>
          </StartButton>
        </Link>
      </Box>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  width: "40%",
}));

const Text = styled(Typography)(() => ({}));

const StartButton = styled(Button)(() => ({
  width: "100%",
  textAlign: "center",
}));
