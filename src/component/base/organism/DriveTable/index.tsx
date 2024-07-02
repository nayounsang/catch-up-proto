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
import DriveElement from "./DriveElement";

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

interface PropType {
  isTutor: boolean;
}

export default function DriveTable({ isTutor }: PropType) {
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
            {isTutor ? <TableCell align="center">세션 생성</TableCell> : <></>}
          </TableHead>
          <TableBody>
            {sessionData.map((e, i) => (
              <DriveElement key={i} {...e} isTutor={isTutor} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
