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
import { useContext, useState } from "react";
import UserModalContent from "./UserModalContent";
import { TutorContext } from "@/App";
export default function SideBarInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { isTutor, setIsTutor } = useContext(TutorContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTutor(e.target.checked);
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
              <Typography>수강자</Typography>
              <Switch onChange={handleChange} checked={isTutor}/>
              <Typography>강의자</Typography>
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