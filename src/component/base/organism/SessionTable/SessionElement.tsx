import { Checkbox, TableCell, TableRow } from "@mui/material";

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
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        cursor: "pointer",
      }}
     component="a" 
     href="/session"
    >
      <TableCell component="th" scope="row" padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{role}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{auth}</TableCell>
      <TableCell align="right">{document}</TableCell>
    </TableRow>
  );
}
