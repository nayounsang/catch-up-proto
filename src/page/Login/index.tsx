import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Link,
  Typography,
  styled,
} from "@mui/material";
import BrandLogo from "../../component/base/atom/BrandLogo";

export default function Login() {
  return (
    <Container>
      <InnerContainer>
        <Typography variant="h2" fontWeight="bold">
          캐치업
        </Typography>
        <Input placeholder="아이디" fullWidth required/>
        <Input placeholder="비밀번호" fullWidth type="password" required/>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="자동 로그인"
          />
          <Link href="/">
            <Typography>비밀번호 찾기</Typography>
          </Link>
        </Box>
        <Link href="/dashboard" sx={{ width: "100%" }}>
          <Button variant="contained" fullWidth type="submit">
            <Typography>로그인</Typography>
          </Button>
        </Link>
        <Link href="/" sx={{ alignSelf: "flex-end" }}>
          계정이 없나요? 회원가입 하기
        </Link>
        <Box display="flex" justifyContent="space-around" sx={{width:"100%"}}>
          <BrandLogo />
          <BrandLogo />
          <BrandLogo />
        </Box>
      </InnerContainer>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const InnerContainer = styled(Box)(() => ({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
}));
