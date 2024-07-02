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
import SessionElement from "./SessionElement";

const sessionData: {
  name: string;
  role: string;
  auth: "세션 참여자" | "비공개";
  date: string;
  document: string;
}[] = [
  {
    name: "나윤상에 대한 이해 1주차",
    role: "강의자",
    date: "2024-06-21",
    document: "lecture-01.pdf",
    auth: "세션 참여자",
  },
  {
    name: "우주왕복 로켓 실험 3주차",
    role: "수강자",
    date: "2024-06-21",
    document: "universe03.pdf",
    auth: "세션 참여자",
  },
  {
    name: "운영체제-데드락",
    role: "강의자",
    date: "2024-06-21",
    document: "osos.pdf",
    auth: "비공개",
  },
  {
    name: "나윤상에 대한 이해 1주차",
    role: "강의자",
    date: "2024-06-21",
    document: "lecture-01.pdf",
    auth: "세션 참여자",
  },
  {
    name: "우주왕복 로켓 실험 3주차",
    role: "수강자",
    date: "2024-06-21",
    document: "universe03.pdf",
    auth: "세션 참여자",
  },
  {
    name: "운영체제-데드락",
    role: "강의자",
    date: "2024-06-21",
    document: "osos.pdf",
    auth: "비공개",
  },
];

interface PropType {
  isTutor: boolean;
}

export default function SessionTable({ isTutor }: PropType) {
  const data = sessionData.filter((e) =>
    isTutor ? e.role === "강의자" : e.role === "수강자"
  );
  return (
    <Box sx={{ padding: "1rem" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>세션 제목</TableCell>
            <TableCell align="right">일시</TableCell>
            <TableCell align="right">파일 다운 권한</TableCell>
            <TableCell align="right">문서</TableCell>
          </TableHead>
          <TableBody>
            {data.map((e, i) => {
              // eslint-disable-next-line no-unused-vars , @typescript-eslint/no-unused-vars
              const { role, ...rest } = e;
              return <SessionElement {...rest} key={i} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
