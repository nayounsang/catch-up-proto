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
} from "@mui/material";
import { useState } from "react";
import UserModalContent from "./UserModalContent";

export default function SideBarInfo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box>
        <Divider />
        <List subheader={<ListSubheader>유저</ListSubheader>}>
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
