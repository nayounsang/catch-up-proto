import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import BrandLogo from "../../../base/atom/BrandLogo";

export default function SideBarInfo() {
  return (
    <Box>
      <Divider />
      <List subheader={<ListSubheader>유저</ListSubheader>}>
        <ListItem>
          <ListItemButton
            sx={{ cursor: "default", ":hover": { backgroundColor: "inherit" } }}
          >
            <ListItemAvatar>
              <BrandLogo width={24} height={24} />
            </ListItemAvatar>
            <ListItemText>나윤상</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
