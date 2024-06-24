import {
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TableCell,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DeleteIcon from "@mui/icons-material/Delete";

interface PropType {
  name: string;
  date: string;
  sessions: string[];
  capacity: string;
}

export default function FileElement({
  name,
  date,
  sessions,
  capacity,
}: PropType) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Link href="/">{name}</Link>
      </TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">{capacity}</TableCell>
      <TableCell align="right">
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="sessions">목록</InputLabel>
          <Select id="sessions">
            {sessions.length > 0 ? (
              sessions.map((e, i) => (
                <Link href="/session">
                  <MenuItem key={i} value={e}>
                    {e}
                  </MenuItem>
                </Link>
              ))
            ) : (
              <MenuItem value={""}>세션이 없습니다</MenuItem>
            )}
            <MenuItem value={""}>
              <Button fullWidth variant="outlined" startIcon={<AddIcon />}>
                세션 생성 및 연결
              </Button>
            </MenuItem>
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="center">
        <Button>
          <DeleteIcon color="error" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
