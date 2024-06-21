import { Box, Button, Input, Link, Typography, styled } from "@mui/material";

export default function Login() {
  return (
    <Container>
      <Typography variant="h2" fontWeight="bold">
        캐치업
      </Typography>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Box flexDirection="row">
        <Link href="/dashboard">
          <Button variant="contained">
            <Typography>로그인</Typography>
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="contained" color="secondary">
            <Typography>가입하기</Typography>
          </Button>
        </Link>
      </Box>
      <Box flexDirection="row"></Box>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "0.5rem",
}));
