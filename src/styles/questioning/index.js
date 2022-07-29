import { Box, List, ListItem, styled } from "@mui/material";
import { Colors } from "../theme";

export const QuestionBox = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "relative",
  backgroundColor: Colors.LightGrayishBlue,
  padding: "3rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    padding: "7rem",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "start",
  },
}));

export const InfoList = styled(List)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "baseline",
    },
}));

export const InfoListItem = styled(ListItem)(({ theme }) => ({
    flexDirection: 'column',
    width: '20rem',
    mt: '2.5rem',
    alignItems:"center",
    textAlign:'center',
    [theme.breakpoints.up("sm")]: {
        alignItems:'flex-start',
        textAlign:'left'
    }
    
}))