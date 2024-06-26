import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import { ReactNode } from "react";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideBarElement from "./SideBarElement";
import BrandLogo from "@/component/base/atom/BrandLogo";
import SideBarActionElement from "./SideBarActionElement";

const menuData: {
  key: number;
  text: string;
  Icon: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}[] = [
  { key: 0, text: "대쉬보드", Icon: <DashboardIcon />, href: "/dashboard" },
  { key: 1, text: "세션", Icon: <SchoolIcon />, href: "/dashboard/sessions" },
  { key: 2, text: "드라이브", Icon: <FolderIcon />, href: "/dashboard/drive" },
  { key: 3, text: "문서", Icon: <ArticleIcon />, href: "/dashboard/documents" },
];

const actionData: {
  key: number;
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href?: string;
}[] = [
  { key: 0, text: "새션 접속" },
  { key: 1, text: "새션 생성", href: "/session" },
  { key: 2, text: "문서 업로드" },
];

export default function SideBarMenu() {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <BrandLogo width={24} height={24} />
          </ListItemIcon>
        </ListItem>
      </List>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            "& .MuiAccordionSummary-content": {
              margin: 0,
              "&.Mui-expanded": {
                margin: 0,
              },
            },
            margin: 0,
            "& .Mui-expanded": {
              margin: 0,
              minHeight: 0,
            },
          }}
        >
          <ListSubheader>편의 기능</ListSubheader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {actionData.map((e) => (
              <SideBarActionElement {...e} />
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <List subheader={<ListSubheader>메뉴</ListSubheader>} component="nav">
        {menuData.map((e) => (
          <SideBarElement {...e} />
        ))}
      </List>
    </Box>
  );
}
