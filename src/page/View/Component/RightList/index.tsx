import { Box, Drawer, IconButton, Toolbar } from "@mui/material";
import Overlay from "./Overlay";
import BrushIcon from "@mui/icons-material/Brush";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import CropIcon from "@mui/icons-material/Crop";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import { ReactNode } from "react";

const icons: ReactNode[] = [
  <BrushIcon />,
  <ColorLensIcon />,
  <FormatColorFillIcon />,
  <CropIcon />,
  <UndoIcon />,
  <RedoIcon />,
  <SaveIcon />,
  <ClearIcon />,
];

interface PropType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = "100px";

export default function RightList({ isOpen, setIsOpen }: PropType) {
  return (
    <>
      <Overlay drawerWidth={drawerWidth} />
      <Drawer
        variant="persistent"
        sx={{
          width: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        anchor="right"
      >
        <Toolbar/>
        <Box sx={{display:"flex",flexWrap:"wrap",gap:"0.5rem",padding:"1rem 0.25rem"}}>
            {icons.map((e,i)=><IconButton key={i}>{e}</IconButton>)}
        </Box>
      </Drawer>
    </>
  );
}
