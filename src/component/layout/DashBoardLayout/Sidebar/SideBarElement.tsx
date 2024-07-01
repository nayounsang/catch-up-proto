import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { ReactNode } from "react";
import { Link as _Link, To } from "react-router-dom";

interface PropType {
  icon: ReactNode;
  text: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function SideBarElement({
  icon,
  text,
  onClick,
  href,
}: PropType) {
 
  return (
    <ListItem>
      <Link to={href as To} preventScrollReset>
        <ListItemButton onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

const Link = styled(_Link)(() => ({
  width: "100%",
  textDecoration: "none",
  color: "inherit", // 기본 링크 색상 제거
  "&:hover": {
    textDecoration: "none", // 호버 시에도 밑줄 제거
    color: "inherit",
  },
}));
