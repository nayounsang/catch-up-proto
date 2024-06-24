import {
  Box,
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
  sessions: string[];
}[] = [
  {
    name: "asdf.pdf",
    date: "2023-03-01",
    capacity: "1.6Mb",
    sessions: ["foo", "bar", "baz"],
  },
  {
    name: "qwerty.pdf",
    date: "2023-03-01",
    capacity: "2.3Mb",
    sessions: ["foo", "bar", "baz"],
  },
  { name: "foo.pdf", date: "2023-03-01", capacity: "1.6Mb", sessions: ["foo"] },
  { name: "lorem.pdf", date: "2023-03-01", capacity: "10.6Mb", sessions: [] },
  {
    name: "good.pdf",
    date: "2023-03-01",
    capacity: "1.6Mb",
    sessions: ["foo", "bar", "baz"],
  },
  {
    name: "alicebob.pdf",
    date: "2023-03-01",
    capacity: "1.6Mb",
    sessions: ["foo", "bar", "baz"],
  },
];

export default function FileTable() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>문서 제목</TableCell>
            <TableCell align="right">일시</TableCell>
            <TableCell align="right">용량</TableCell>
            <TableCell align="right">세션</TableCell>
            <TableCell align="center">삭제</TableCell>
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
