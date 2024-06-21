import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";

export default function SessionTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell>세션 제목</TableCell>
          <TableCell align="right">내 역할</TableCell>
          <TableCell align="right">일시</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}
