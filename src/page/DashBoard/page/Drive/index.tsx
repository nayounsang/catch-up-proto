import { TutorContext } from "@/App";
import DriveTable from "@/component/base/organism/DriveTable";
import { Delete, Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";

export default function Drive() {
  const { isTutor } = useContext(TutorContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          padding: "0.25rem 1rem",
          gap: "2rem",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {isTutor ? "내가 업로드한 자료" : "내가 수강한 세션 자료"}
        </Typography>
        <Button startIcon={<Download/>} variant="contained">
          선택 다운로드
        </Button>
        <Button color="error" startIcon={<Delete />} variant="contained">
          선택 삭제
        </Button>
      </Box>
      <DriveTable isTutor={isTutor} />
    </>
  );
}
