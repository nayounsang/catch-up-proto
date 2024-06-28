import { Brush, Download, Handyman } from "@mui/icons-material";
import { Box, FormControlLabel, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import SessionTool from "./SessionTool";
import SessionDownload from "./SessionDownload";

interface PropType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppBarRight({ isOpen, setIsOpen }: PropType) {
  const [toolAnchorEl, setToolAnchorEl] = useState<HTMLButtonElement | null>(
    null
  );

  const handleToolPopoverOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setToolAnchorEl(event.currentTarget);
  };

  const handleToolPopoverClose = () => {
    setToolAnchorEl(null);
  };

  const [downloadAnchorEl, setDownloadAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const handleDownloadPopoverOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDownloadAnchorEl(event.currentTarget);
  };

  const handleDownloadPopoverClose = () => {
    setDownloadAnchorEl(null);
  };

  const handleSwitchChange = () => {
    setIsOpen(!isOpen);
  }

  const toolOpen = Boolean(toolAnchorEl);
  const toolId = toolOpen ? "simple-popover" : undefined;
  const downloadOpen = Boolean(downloadAnchorEl);
  const downloadId = downloadOpen ? "simple-popover" : undefined;
  return (
    <Box display="flex" alignItems="center" gap="0.5rem">
      <IconButton color="inherit" onClick={handleToolPopoverOpen}>
        <Handyman />
      </IconButton>
      <IconButton color="inherit" onClick={handleDownloadPopoverOpen}>
        <Download />
      </IconButton>
      <FormControlLabel
        control={
          <Switch
            color="default"
            checked={isOpen}
            onChange={handleSwitchChange}
          />
        }
        labelPlacement="start"
        label={
          <IconButton color="inherit" onClick={handleSwitchChange}>
            <Brush />
          </IconButton>
        }
      />

      <SessionTool
        id={toolId}
        open={toolOpen}
        anchorEl={toolAnchorEl}
        onClose={handleToolPopoverClose}
      />
      <SessionDownload
        id={downloadId}
        open={downloadOpen}
        anchorEl={downloadAnchorEl}
        onClose={handleDownloadPopoverClose}
      />
    </Box>
  );
}
