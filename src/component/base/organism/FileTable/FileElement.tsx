import { Checkbox, TableCell, TableRow } from "@mui/material";

interface PropType {
  name: string;
  date: string;
  capacity: string;
}

export default function FileElement({ name, date, capacity }: PropType) {
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
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{capacity}</TableCell>
    </TableRow>
  );
}
