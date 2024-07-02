import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface PropType {
  name: string;
  date: string;
  capacity: string;
  isTutor: boolean;
}

export default function DriveElement({
  name,
  date,
  capacity,
  isTutor,
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
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{capacity}</TableCell>
      {isTutor ? (
        <TableCell align="center">
          <Button variant="outlined" startIcon={<AddIcon />} size="small">
            세션 생성
          </Button>
        </TableCell>
      ) : (
        <></>
      )}
    </TableRow>
  );
}
