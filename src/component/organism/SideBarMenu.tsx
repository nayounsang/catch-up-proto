import { List } from "@mui/material";
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import SideBarElement from "../molecule/SideBarElement";

const menuData: {
  key: number;
  text: string;
  Icon: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}[] = [{ key: 0, text: "홈", Icon: <HomeIcon />, href: "/" },
{ key: 1, text: "세션", Icon: <SchoolIcon />, href: "/" },
{ key: 2, text: "문서", Icon: <ArticleIcon />, href: "/" },
];

export default function SideBarMenu() {
  return (
    <List>
      {menuData.map((e) => (
        <SideBarElement {...e} />
      ))}
    </List>
  );
}
