import { ListItem, ListItemButton, ListItemText, styled } from "@mui/material";
import { Link as _Link } from "react-router-dom";

interface PropType {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  href?: string;
}

export default function SideBarActionElement({
  text,
  onClick,
  href,
}: PropType) {
  return (
    <ListItem sx={{ p: "0.25rem" }} alignItems="center" dense>
      <ListItemButton onClick={onClick}>
        {href ? (
          <Link to={href}>
            <ListItemText>{text}</ListItemText>
          </Link>
        ) : (
          <ListItemText>{text}</ListItemText>
        )}
      </ListItemButton>
    </ListItem>
  );
}

const Link = styled(_Link)(() => ({
  color: "#000",
  textDecoration: "inherit",
}));
