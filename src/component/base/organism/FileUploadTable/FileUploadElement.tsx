import { Button, Checkbox,  TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

interface PropType {
  name: string;
  
  date: string;
  
}

export default function FileUploadElement({
  name,
  
  date,
  
}: PropType) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Checkbox/>
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="center">
        <Button>
          <DeleteIcon color="error" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
