import { ModalContext } from "@/component/base/atom/ModalContainer";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";

interface ElementPropType {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  text: string;
}

function Element({ onClick, text, color }: ElementPropType) {
  return (
    <ListItem
      onClick={() => {
        onClick;
      }}
    >
      <Button color={color}>{text}</Button>
    </ListItem>
  );
}

const data: Omit<ElementPropType, "onClick">[] = [
  {
    color: "info",
    text: "내 정보",
  },
  {
    color: "error",
    text: "로그아웃",
  },
];

export default function UserModalContent() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <Container>
      <List>
        {data.map((e, i) => (
          <Element
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            text={e.text}
            color={e.color}
            key={i}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
}));
