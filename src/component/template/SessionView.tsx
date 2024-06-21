import { Box } from "@mui/material";
import SessionOption from "../organism/SessionOption";
import SessionTable from "../organism/SessionTable";

export default function SessionView() {
  return (
    <Box flexGrow={1}>
      <SessionOption />
      <SessionTable/>
    </Box>
  );
}
