import { Box, Button, FormLabel, Typography } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { useState } from "react";
import ModalContainer from "@/component/base/atom/ModalContainer";
import FileSelectModal from "./\bFileSelectModal";

export default function SessionFileSelect() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box display="flex" flexDirection="column" gap="1rem">
        <Box display="flex" flexDirection="column" gap="0.25rem">
          <FormLabel>강의 자료 선택</FormLabel>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AttachFile />}
            size="large"
            sx={{ width: "200px" }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            강의 자료 추가
          </Button>
        </Box>
        <Box display="flex" flexDirection="column" gap="0.25rem">
          <FormLabel>현재 선택한 자료</FormLabel>
          <Typography>Lecture-07-22.pdf</Typography>
        </Box>
      </Box>
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <FileSelectModal />
      </ModalContainer>
    </>
  );
}
