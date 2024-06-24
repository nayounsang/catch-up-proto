import { Typography } from "@mui/material";
import GridContent from ".";

export default function LatestHeldSession(){
    return(
        <GridContent title="내가 진행한 세션" subTitle="최근 10개 세션">
            <Typography textAlign="center">아직 진행한 세션이 없습니다.</Typography>
        </GridContent>
    )
}