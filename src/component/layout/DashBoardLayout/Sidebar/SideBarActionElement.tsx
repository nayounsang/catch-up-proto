import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface PropType {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function SideBarActionElement({ text, onClick }: PropType) {
  return (
    <ListItem sx={{ p: "0.25rem" }} alignItems="center" dense>
        <ListItemButton onClick={onClick}>
            <ListItemText>{text}</ListItemText>
        </ListItemButton>
    </ListItem>
  );
}
