import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import FileUploadElement from "./FileUploadElement";

const fileData:{name:string;date:string;}[] = [
    {name:"나의개인정보.pdf",date:"2022-03-10"},
    {name:"국가1급기밀.pdf",date:"2021-03-10"},
    {name:"은행공인인증서.pdf",date:"2020-03-10"},
    {name:"네이버계정정보.pdf",date:"2019-03-10"},
    {name:"네이버계정정보.pdf",date:"2019-03-10"},
]

export default function FileUploadTable() {
  return (
    <Box sx={{maxHeight:"250px",overflowY:"scroll"}}>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableCell align="left">파일명</TableCell>
            <TableCell align="right">일시</TableCell>
            <TableCell align="right">선택</TableCell>            
            <TableCell align="right">미리보기</TableCell>
          </TableHead>
          <TableBody >
            {fileData.map((e, i) => (
              <FileUploadElement {...e} key={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
