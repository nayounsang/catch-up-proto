import { Button, TableCell, TableRow } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

interface PropType {
  name: string;
  role: string;
  date: string;
  document: string;
}

export default function SessionElement({
  name,
  role,
  date,
  document,
}: PropType) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{role}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{document}</TableCell>
      <TableCell align="center">
        <Button>
          <SettingsIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}
