import PopoverContainer from "@/component/base/atom/PopoverContainer";
import {
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
} from "@mui/material";

interface PropType {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

export default function SessionTool(props: PropType) {
  return (
    <PopoverContainer {...props}>
      <Paper sx={{ padding: "1rem" }}>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="강사 화면 추적"
          />
          <FormControlLabel required control={<Switch />} label="다른거" />
          <FormControlLabel disabled control={<Switch />} label="다른거" />
        </FormGroup>
      </Paper>
    </PopoverContainer>
  );
}
