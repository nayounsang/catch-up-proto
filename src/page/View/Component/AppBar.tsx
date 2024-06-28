import {
  Toolbar,
  AppBar as _AppBar,
} from "@mui/material";
import AppBarLeft from "./AppBarLeft";
import AppBarMid from "./AppBarMid";
import AppBarRight from "./AppBarRight";

interface PropType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppBar({ isOpen, setIsOpen }: PropType) {
  return (
    <_AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppBarLeft isOpen={isOpen} setIsOpen={setIsOpen}/>
        <AppBarMid/>
        <AppBarRight/>
      </Toolbar>
    </_AppBar>
  );
}
