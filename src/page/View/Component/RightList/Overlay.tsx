import { Drawer as _Drawer, styled } from "@mui/material";

interface PropType {
  drawerWidth: number | string;
}

export default function Overlay({ drawerWidth }: PropType) {
  return (
    <Drawer variant="permanent" anchor="right" drawerWidth={drawerWidth} />
  );
}

const Drawer = styled(_Drawer)<{ drawerWidth: number | string }>(
  ({ drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  })
);
