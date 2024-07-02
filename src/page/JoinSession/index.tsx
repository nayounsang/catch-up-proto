import { Launch, Link } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function JoinSession() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Box
        width="600px"
        p="2rem"
        display="flex"
        flexDirection="column"
        gap="1.5rem"
      >
        <Typography variant="h4">링크 또는 코드로 접속</Typography>
        <Box>
          <Typography variant="h6">코드</Typography>
          <TextField placeholder="코드 입력" />
        </Box>
        <Box>
          <Typography variant="h6">링크</Typography>
          <TextField
            fullWidth
            placeholder="링크 붙여넣기"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Link />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          startIcon={<Launch />}
          size="large"
          href="/view"
        >
          세션 접속
        </Button>
      </Box>
    </Box>
  );
}
