import { Add, Remove, SettingsOverscan } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography, styled } from "@mui/material";

export default function AppBarMid() {
  return (
    <Box display="flex" alignItems="center" gap="0.3rem">
      <Input value="10" sx={{ width: "4ch" }} />
      <Typography>/</Typography>
      <Typography>10</Typography>
      <IconButton color="inherit" sx={{ marginLeft: "0.3rem" }}>
        <Remove fontSize="small" />
      </IconButton>
      <Input value="100%" sx={{ width: "6ch" }} />
      <IconButton color="inherit">
        <Add fontSize="small" />
      </IconButton>
      <IconButton color="inherit" sx={{ marginLeft: "0.3rem" }}>
        <SettingsOverscan />
      </IconButton>
    </Box>
  );
}

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "5px",
    textAlign: "center",
  },
  "& .MuiInputBase-root.Mui-focused .MuiInputBase-input": {
    color: "#fff",
  },
  textAlign: "center",
  margin: 0,
  padding: 0,
}));
