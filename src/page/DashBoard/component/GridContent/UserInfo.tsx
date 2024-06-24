import BrandLogo from "@/component/base/atom/BrandLogo";
import GridItem from ".";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

const data: boolean[] = [true, true, false, true, true];

export default function UserInfo() {
  return (
    <GridItem
      title="내 정보"
      subTitle="나윤상님 안녕하세요!"
      avatar={<BrandLogo />}
    >
      <Box display="flex" marginBottom="2rem">
        <Box flex="1" textAlign="center">
          <Typography>이번달 진행 세션</Typography>
          <Typography variant="h3">6</Typography>
        </Box>
        <Box flex="1" textAlign="center">
          <Typography>이번달 들은 세션</Typography>
          <Typography variant="h3">18</Typography>
        </Box>
      </Box>
      <Box>
        <Typography marginBottom="1rem">이번달 세션 참여</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          {data.map((e, i) => (
            <Box key={i} textAlign="center">
              {e ? <CheckCircleIcon color="success"/> : <CircleIcon color="disabled" />}
              <Typography>{i}주차</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </GridItem>
  );
}
