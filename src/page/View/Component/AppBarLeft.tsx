import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface PropType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppBarLeft({ isOpen, setIsOpen }: PropType) {
  return (
    <Box display="flex" alignItems="center" gap="0.5rem">
      <IconButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        color="inherit"
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Typography variant="h6">main_lab_10.pdf</Typography>
    </Box>
  );
}
