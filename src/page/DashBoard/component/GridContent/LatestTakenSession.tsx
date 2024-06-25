import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import GridContent from ".";

export default function LatestTakenSession() {
  return (
    <GridContent title="내가 들은 세션" subTitle="최근 10개 세션">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableCell>세션 제목</TableCell>
            <TableCell align="right">문서</TableCell>
            <TableCell align="right">일시</TableCell>
          </TableHead>
          <TableBody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
              <TableRow key={e}>
                <TableCell>나윤상을 소개합니다</TableCell>
                <TableCell align="right">nayounsang.pdf</TableCell>
                <TableCell align="right">2021-03-20</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GridContent>
  );
}
