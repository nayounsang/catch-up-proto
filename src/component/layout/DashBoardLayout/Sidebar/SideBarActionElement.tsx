import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { ReactNode } from "react";
import { To, Link as _Link } from "react-router-dom";

function LinkWrapper({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <Link to={href as To} preventScrollReset>
        {children}
      </Link>
    );
  } else {
    return <>{children}</>;
  }
}
interface PropType {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href?: string;
  icon?: ReactNode;
}

export default function SideBarActionElement({
  text,
  onClick,
  href,
  icon,
}: PropType) {
  return (
    <ListItem>
      <LinkWrapper href={href}>
        <ListItemButton onClick={onClick}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </LinkWrapper>
    </ListItem>
  );
}

const Link = styled(_Link)(() => ({
  color: "#000",
  textDecoration: "inherit",
}));
