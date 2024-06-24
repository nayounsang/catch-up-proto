import { Button, Link, TableCell, TableRow } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

interface PropType {
  name: string;
  role: string;
  date: string;
  document: string;
  auth: string;
}

export default function SessionElement({
  name,
  role,
  date,
  document,
  auth,
}: PropType) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Link href="/session">{name}</Link>
      </TableCell>
      <TableCell align="right">{role}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{auth}</TableCell>
      <TableCell align="right">{document}</TableCell>

      <TableCell align="center">
        <Button>
          <DeleteIcon color="error"/>
        </Button>
      </TableCell>
    </TableRow>
  );
}
