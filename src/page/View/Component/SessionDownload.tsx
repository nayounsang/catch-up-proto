import PopoverContainer from "@/component/base/atom/PopoverContainer";
import { Download } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup, Paper } from "@mui/material";

interface PropType {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

export default function SessionDownload(props: PropType) {
  return (
    <PopoverContainer {...props}>
      <Paper sx={{ padding: "1rem" }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="자료 다운로드"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="내 필기 다운로드"
          />
          <FormControlLabel control={<Checkbox />} label="강사 팔기 다운로드" />
        </FormGroup>
        <Button fullWidth startIcon={<Download/>} variant="contained">다운로드</Button>
      </Paper>
    </PopoverContainer>
  );
}
