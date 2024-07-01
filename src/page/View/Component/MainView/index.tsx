import { Box, Toolbar, styled } from "@mui/material";

export default function MainView() {
  return (
    <Box
      flexGrow="1"
      boxSizing="border-box"
      component="main"
      display="flex"
      flexDirection="column"
    >
      <Toolbar />
      <Box flexGrow="1" boxSizing="border-box" position="relative">
        <Image src="/presentation.png" alt="presentation" />
      </Box>
    </Box>
  );
}

const Image = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
