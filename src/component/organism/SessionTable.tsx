import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import SessionElement from "../molecule/SessionElement";

const sessionData: {
  name: string;
  role: string;
  auth: string;
  date: string;
  document: string;
}[] = [
  {
    name: "나윤상에 대한 이해 1주차",
    role: "강의자",
    date: "2024-06-21",
    document: "lecture-01.pdf",
    auth:"모든 사람",
  },
  {
    name: "우주왕복 로켓 실험 3주차",
    role: "수강생",
    date: "2024-06-21",
    document: "universe03.pdf",
    auth:"링크 소유자",
  },
  {
    name: "운영체제-데드락",
    role: "강의자",
    date: "2024-06-21",
    document: "비어있습니다.",
    auth:"비공개",
  },
];

export default function SessionTable() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>세션 제목 및 상세보기</TableCell>
            <TableCell align="right">내 역할</TableCell>
            <TableCell align="right">일시</TableCell>
            <TableCell align="right">권한</TableCell>
            <TableCell align="right">문서</TableCell>
        
            <TableCell align="center">삭제</TableCell>
          </TableHead>
          <TableBody>
            {sessionData.map((e, i) => (
              <SessionElement {...e} key={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
