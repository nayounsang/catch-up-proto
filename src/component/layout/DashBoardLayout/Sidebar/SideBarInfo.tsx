import BrandLogo from "@/component/base/atom/BrandLogo";
import ModalContainer from "@/component/base/atom/ModalContainer";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { ReactNode, useContext, useState } from "react";
import UserModalContent from "./UserModalContent";
import { TutorContext } from "@/App";

function SwitchLabel({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <Box component="div" onClick={onClick} sx={{ cursor: "pointer" }}>
      <Typography>{children}</Typography>
    </Box>
  );
}

export default function SideBarInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { isTutor, setIsTutor } = useContext(TutorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTutor(e.target.checked);
  };
  const handleLabelClick = () => {
    setIsTutor(!isTutor);
  };
  return (
    <>
      <Box>
        <Divider />
        <List subheader={<ListSubheader>유저</ListSubheader>}>
          <ListItem>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <SwitchLabel onClick={handleLabelClick}>수강자</SwitchLabel>
              <Switch onChange={handleChange} checked={isTutor} />
              <SwitchLabel onClick={handleLabelClick}>강의자</SwitchLabel>
            </Stack>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{}}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <ListItemAvatar>
                <BrandLogo width={24} height={24} />
              </ListItemAvatar>
              <ListItemText>나윤상</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
        <UserModalContent />
      </ModalContainer>
    </>
  );
}
