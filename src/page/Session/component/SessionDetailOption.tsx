import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function SessionDetailOption() {
  return (
    <Box display="flex">
      <Box flex="1">
        <FormLabel id="range">파일 공개 범위</FormLabel>
        <RadioGroup defaultValue="link" row aria-labelledby="range">
          <FormControlLabel
            value="public"
            control={<Radio />}
            label="세션 참여자"
          />
          <FormControlLabel
            value="private"
            control={<Radio />}
            label="비공개"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
}
