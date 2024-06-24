import { TextField } from "@mui/material";

export default function SessionTitleInput() {
  return (
    <TextField
      required
      label="세션 제목"
      defaultValue="리만 가설의 증명 1주차"
    />
  );
}
