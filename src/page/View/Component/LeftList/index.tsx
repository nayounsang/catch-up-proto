import { Box, Drawer, List, Toolbar, Typography } from "@mui/material";

interface PropType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = "200px";

export default function LeftList({ isOpen, setIsOpen }: PropType) {
  return (
    <Drawer
      variant="persistent"
      sx={{
        flexShrink: 0,
        width: isOpen ? drawerWidth : 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Toolbar/>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
            <Box textAlign="center">

          <img src="/presentation.png" key={e} width="160px" height="90px" />
          <Typography>{e}</Typography>
                      </Box>
        ))}
      </List>
    </Drawer>
  );
}
