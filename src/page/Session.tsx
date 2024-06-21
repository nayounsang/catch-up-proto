import {
  Box,
  Button,
  FormControl,
  Typography,
  styled,
} from "@mui/material";
import SessionAuthOption from "../component/molecule/SessionAuthOption";
import SessionTitleInput from "../component/atom/SessionTitleInput";

export default function Session() {
  return (
    <Container>
      <FormControl sx={{ gap: "1rem" }}>
        <SessionTitleInput/>
        <SessionAuthOption/>
        <Box display="flex">

        </Box>
      </FormControl>
      <Button variant="contained" type="submit" sx={{width:"200px"}}>
        <Typography>
            세션 시작
        </Typography>
      </Button>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  boxSizing: "border-box",
  padding: "4rem",
}));
