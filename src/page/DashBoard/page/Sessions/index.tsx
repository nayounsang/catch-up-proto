import { TutorContext } from "@/App";
import SessionTable from "@/component/base/organism/SessionTable";
import { Add, Delete, Launch } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

import { useContext } from "react";

export default function DashboardSessions() {
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
          {isTutor ? "내가 진행한 세션" : "내가 수강한 세션"}
        </Typography>

        <Button startIcon={isTutor ? <Add /> : <Launch />} variant="contained">
          {isTutor ? "세션 생성" : "세션 접속"}
        </Button>
        <Button color="error" startIcon={<Delete />} variant="contained">
          선택 삭제
        </Button>
      </Box>

      <SessionTable isTutor={isTutor} />
    </>
  );
}
