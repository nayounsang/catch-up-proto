import BrandLogo from "@/component/base/atom/BrandLogo";
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

export default function SideBarInfo() {
  return (
    <Box>
      <Divider />
      <List subheader={<ListSubheader>유저</ListSubheader>}>
        <ListItem>
          <ListItemButton sx={{}}>
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
