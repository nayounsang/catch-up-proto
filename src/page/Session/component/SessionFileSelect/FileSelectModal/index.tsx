import FileUploadTable from "@/component/base/organism/FileUploadTable";
import SessionOption from "@/component/base/organism/SessionOption";
import { Box, Tab, Tabs, Typography, styled } from "@mui/material";
import { useState } from "react";
import LocalFileInput from "./LocalFIleInput";

function CustomTabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        display: "flex",
        flexGrow: value === index ? 1 : 0,
        
      }}
    >
      {value === index && (
        <Box sx={{ flexGrow: 1, display: "flex" }}>{children}</Box>
      )}
    </div>
  );
}

export default function FileSelectModal() {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container display="flex" flexDirection="column">
      <Typography variant="h6">강의 자료 업로드 및 수정</Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="내 컴퓨터" />
          <Tab label="기존 압로드 파일" />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <LocalFileInput />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box width="100%">
            <SessionOption marginBottom="1rem" height="auto" />
            <FileUploadTable />
          </Box>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "1rem",
  padding: "1rem",
  width: "700px",
  height: "500px",
}));
