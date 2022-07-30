import { Button, Grid, IconButton, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const ButtonFooter = styled(Button)(() => ({
  fontSize: 13,
  fontWeight: 700,
  textTransform: "capitalize",
  padding: 0,
  margin: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: Colors.LimeGreen,
  },
}));

export const ButtonFooterIcon = styled(IconButton)(() => ({
  transform: "scale(0.7)",
  padding: 0,
  marginTop: "2rem",
  color: Colors.White,
  "&:hover": {
    backgroundColor: "transparent",
    color: Colors.LimeGreen,
  },
}));

export const ListItemCenter = styled(ListItem)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
}));

export const GridButtonAndCopy = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
    alignItems: "center", 
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    alignItems: "flex-end", 
  },
}));
