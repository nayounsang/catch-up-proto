import { Grid, styled } from "@mui/material";
import UserInfo from "./component/GridContent/UserInfo";
import LatestTakenSession from "./component/GridContent/LatestTakenSession";
import LatestHeldSession from "./component/GridContent/LatestHeldSession";
import LatestDocument from "./component/GridContent/LatestDocument";

export default function DashBoard() {
  return (
    <Grid container spacing={2} sx={{ height: "100%", padding: "0.5rem" }}>
      <GridItem item xs={6}>
        <UserInfo />
        <LatestDocument/>
      </GridItem>
      <GridItem item xs={6}>
        <LatestTakenSession/>
        <LatestHeldSession/>
      </GridItem>
    </Grid>
  );
}

const GridItem = styled(Grid)(()=>({
  display:"flex",
  flexDirection:"column",
  gap:"2rem",
}))
