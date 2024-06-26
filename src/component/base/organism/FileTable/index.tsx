import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import FileElement from "./FileElement";

const sessionData: {
  name: string;
  date: string;
  capacity: string;
}[] = [
  {
    name: "asdf.pdf",
    date: "2023-03-01",
    capacity: "1.6MB",
  },
  {
    name: "qwerty.pdf",
    date: "2023-03-01",
    capacity: "2.3MB",
  },
  { name: "foo.pdf", date: "2023-03-01", capacity: "1.6Mb" },
  { name: "lorem.pdf", date: "2023-03-01", capacity: "10.6Mb" },
  {
    name: "good.pdf",
    date: "2023-03-01",
    capacity: "1.6MB",
  },
  {
    name: "alicebob.pdf",
    date: "2023-03-01",
    capacity: "1.6MB",
  },
];

export default function FileTable() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>문서 제목</TableCell>
            <TableCell align="right">생성일</TableCell>
            <TableCell align="right">용량</TableCell>
          </TableHead>
          <TableBody>
            {sessionData.map((e, i) => (
              <FileElement {...e} key={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
