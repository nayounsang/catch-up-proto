import { useState } from "react";
import { Box } from "@mui/material";
import AppBar from "./Component/AppBar";
import LeftList from "./Component/LeftList";
import RightList from "./Component/RightList";
import MainView from "./Component/MainView";

export default function View() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Box display="flex" width="100%" height="100%">
        <AppBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <LeftList isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainView />
        <RightList isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </>
  );
}
