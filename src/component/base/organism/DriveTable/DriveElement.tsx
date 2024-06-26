import {
  Button,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface PropType {
  name: string;
  date: string;
  capacity: string;
}

export default function DriveElement({ name, date, capacity }: PropType) {
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
      <TableCell align="center">
        <Button variant="outlined" startIcon={<AddIcon/>}>
          <Typography>세션 생성</Typography>
        </Button>
      </TableCell>
    </TableRow>
  );
}
