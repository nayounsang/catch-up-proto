import { Check, Visibility } from "@mui/icons-material";
import { Button, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "../../atom/ModalContainer";

interface PropType {
  name: string;
  date: string;
}

export default function FileUploadElement({ name, date }: PropType) {
  const { setIsOpen } = useContext(ModalContext);
  return (
    <TableRow>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">
        <Button
          size="small"
          startIcon={<Check />}
          variant="contained"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          선택하기
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button size="small" startIcon={<Visibility />} color="secondary">
          미리보기
        </Button>
      </TableCell>
    </TableRow>
  );
}
