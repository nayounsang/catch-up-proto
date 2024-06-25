import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import GridContent from ".";

export default function LatestDocument() {
  return (
    <GridContent title="내 자료" subTitle="최근 10개 자료">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableCell>문서 제목</TableCell>
            <TableCell align="right">용량</TableCell>
            <TableCell align="right">일시</TableCell>
          </TableHead>
          <TableBody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
              <TableRow key={e}>
                <TableCell>우주의 비밀.pdf</TableCell>
                <TableCell align="right">7.7MB</TableCell>
                <TableCell align="right">2021-03-20</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GridContent>
  );
}
