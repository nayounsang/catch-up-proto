import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import { ReactNode, useContext } from "react";
import SchoolIcon from "@mui/icons-material/School";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import SideBarElement from "./SideBarElement";
import BrandLogo from "@/component/base/atom/BrandLogo";
import SideBarActionElement from "./SideBarActionElement";
import { TutorContext } from "@/App";
import { Add, Launch } from "@mui/icons-material";

const menuData: {
  key: number;
  text: string;
  icon: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}[] = [
  { key: 0, text: "대쉬보드", icon: <DashboardIcon />, href: "/dashboard" },
  { key: 1, text: "세션", icon: <SchoolIcon />, href: "/dashboard/sessions" },
  { key: 2, text: "드라이브", icon: <FolderIcon />, href: "/dashboard/drive" },
];

export default function SideBarMenu() {
  const { isTutor } = useContext(TutorContext);
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <BrandLogo width={24} height={24} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List
        subheader={<ListSubheader>편의 기능</ListSubheader>}
        component="nav"
      >
        {isTutor ? (
          <SideBarActionElement
            text="새션 생성"
            href="/session"
            icon={<Add />}
          />
        ) : (
          <SideBarActionElement text="새션 접속" icon={<Launch />} />
        )}
      </List>
      <List subheader={<ListSubheader>메뉴</ListSubheader>} component="nav">
        {menuData.map((e) => (
          <SideBarElement
            key={e.key}
            text={e.text}
            icon={e.icon}
            onClick={e.onClick}
            href={e.href}
          />
        ))}
      </List>
    </Box>
  );
}
