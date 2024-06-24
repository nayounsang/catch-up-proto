import { Box, Button, FormLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileSelectOption from "../../../component/organism/FileSelectOption";
import FileTable from "../../../component/organism/FileTable";

export default function SessionFileSelect() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FormLabel>강의 자료 선택</FormLabel>
        <Button startIcon={<AddIcon />} variant="outlined">
          내 장치에서 추가
        </Button>
      </Box>
      <FileSelectOption />
      <FileTable/>
    </Box>
  );
}
