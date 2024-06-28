import { Close } from "@mui/icons-material";
import { Box, IconButton, Popover } from "@mui/material";
import { ReactNode } from "react";

interface PropType {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  children: ReactNode;
}

export default function PopoverContainer({ children, ...props }: PropType) {
  return (
    <Popover {...props}>
      <Box
        justifyContent="flex-end"
        width="100%"
        display="flex"
      >
        <IconButton color="inherit" onClick={props.onClose}>
          <Close />
        </IconButton>
      </Box>
      {children}
    </Popover>
  );
}
