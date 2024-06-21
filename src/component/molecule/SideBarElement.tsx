import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";

interface PropType {
  Icon: ReactNode;
  text: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function SideBarElement({
  Icon,
  text,
  onClick,
  href,
}: PropType) {
  return (
    <ListItem>
      <Link
        href={href}
        sx={{
            width:"100%",
          textDecoration: "none",
          color: "inherit", // 기본 링크 색상 제거
          "&:hover": {
            textDecoration: "none", // 호버 시에도 밑줄 제거
            color: "inherit",
          },
        }}
      >
        <ListItemButton onClick={onClick}>
          <ListItemIcon>{Icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
