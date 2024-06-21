import { Box, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function SessionAuthOption() {
  return (
    <Box>
      <FormLabel>공개 범위</FormLabel>
      <RadioGroup defaultValue="link" row>
        <FormControlLabel
          value="link"
          control={<Radio />}
          label="링크 소유자"
        />
        <FormControlLabel
          value="public"
          control={<Radio />}
          label="전체 공개"
        />
        <FormControlLabel value="private" control={<Radio />} label="비공개" />
      </RadioGroup>
    </Box>
  );
}
