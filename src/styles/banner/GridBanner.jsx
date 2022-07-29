import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const GridBanner = styled(Grid)(() => ({
    backgroundImage: Colors.gradientWB,
    width: '100%',
    overflowX: 'clip',
    display: 'flex',
}))
export const GridBannerItemsContent = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
}))



export const MobileImage = styled(Box)(() => ({
    position: 'absolute',
    top: '-275px',
    right: 0,
    zIndex: 20
}))