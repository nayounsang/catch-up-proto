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
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  text: string;
}

function Element({ onClick, text, color }: ElementPropType) {
  return (
    <ListItem>
      <Box>
        <Button onClick={onClick} color={color}>
          {text}
        </Button>
      </Box>
    </ListItem>
  );
}

const data: ElementPropType[] = [{}];

export default function UserModalContent() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <Container>
      <List>
        <ListItem></ListItem>
      </List>
    </Container>
  );
}

const Container = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
}));
