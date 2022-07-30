import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

//grid dad of all component
export const GridBanner = styled(Grid)(() => ({
  backgroundImage: Colors.gradientWB,
  width: "100%",
  overflowX: "clip",
  display: "flex",
}));

//content of left side of banner
export const GridBannerItemsContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "fit-content",
  [theme.breakpoints.up("sm")]: {
    height: "inherit",
  },
}));

export const ImageBannerComponent = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 5,
  top: "-370px",
  right: "-195px",
  transform: "scale(0.45)",
  [theme.breakpoints.up("sm")]: {
    top: "-160px",
    right: "-250px",
    transform: "scale(0.6)",
  },
  [theme.breakpoints.up("md")]: {
    right: "-250px",
    transform: "scale(0.9)",
  },
}));

//the Grid for mobile and background image
export const BgIntroGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  order: -1,
  height: "23rem",
  [theme.breakpoints.up("sm")]: {
    order: 1,
    height: "35rem",
  },
}));
//background image of mobile
export const BgIntroBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  transform: "scale(1.3,1.1)",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    top: "-275px",
    right: "-600px",
    transform: "scale(0.6)",
  },
  [theme.breakpoints.up("md")]: {
    top: "-275px",
    right: "-550px",
    transform: "scale(0.9)",
  },
}));
