import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function SessionDetailOption() {
  return (
    <Box display="flex">
      <Box flex="1">
        <FormLabel id="range">공개 범위</FormLabel>
        <RadioGroup defaultValue="link" row aria-labelledby="range">
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
          <FormControlLabel
            value="private"
            control={<Radio />}
            label="비공개"
          />
        </RadioGroup>
      </Box>
      <Box flex="1" alignItems="center" display="flex" gap="0.5rem" justifyContent="flex-end">
        <TextField label="초대 코드" size="small" value="1904a"/>
        <Button variant="contained">생성</Button>
      </Box>
    </Box>
  );
}
