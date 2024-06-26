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
        <Container onClick={()=>setIsOpen(false)}>{children}</Container>
      </Modal>
    </ModalContext.Provider>
  );
}

const Container = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
