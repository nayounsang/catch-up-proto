import { Box, Modal, styled } from "@mui/material";
import { ReactNode, createContext } from "react";

interface PropType {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalStateType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalStateType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default function ModalContainer({
  children,
  isOpen,
  setIsOpen,
}: PropType) {
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Container>{children}</Container>
      </Modal>
    </ModalContext.Provider>
  );
}

const Container = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
}));
// width: "100%",
// height: "100%",
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
