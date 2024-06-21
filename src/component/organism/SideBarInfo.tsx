import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarElement from "../molecule/SideBarElement";
import BrandLogo from "../atom/BrandLogo";

const infoData: {
  key: number;
  text: string;
  Icon: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}[] = [{ key: 0, text: "설정", Icon: <SettingsIcon />, href: "/" }];

export default function SideBarInfo() {
  return (
    <List>
      {infoData.map((e) => (
        <SideBarElement {...e} />
      ))}
      <ListItem>
        <ListItemButton sx={{cursor:"default",":hover":{backgroundColor:"inherit"}}}>
          <ListItemAvatar>
            <BrandLogo width={24} height={24} />
          </ListItemAvatar>
          <ListItemText>나윤상</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
