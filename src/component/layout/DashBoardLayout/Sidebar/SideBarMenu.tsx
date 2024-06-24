import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import SideBarElement from "./SideBarElement";
import BrandLogo from "@/component/base/atom/BrandLogo";

const menuData: {
  key: number;
  text: string;
  Icon: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}[] = [
  { key: 0, text: "대쉬보드", Icon: <HomeIcon />, href: "/dashboard" },
  { key: 1, text: "세션", Icon: <SchoolIcon />, href: "/dashboard/sessions" },
  { key: 2, text: "문서", Icon: <ArticleIcon />, href: "/dashboard/documents" },
];

export default function SideBarMenu() {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemIcon>
            <BrandLogo width={24} height={24} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List subheader={<ListSubheader>메뉴</ListSubheader>}>
        {menuData.map((e) => (
          <SideBarElement {...e} />
        ))}
      </List>
    </Box>
  );
}
