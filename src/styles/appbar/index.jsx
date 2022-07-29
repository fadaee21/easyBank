import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { Colors } from "../theme";



export const MenuButton = styled(Button)(() => ({
    display: 'block',
    fontSize: 14,
    textTransform: 'capitalize',
    padding: 10,
    height: '80px',
    borderBottom: `3px solid ${Colors.White}`,
    borderRadius: '0',
    "&:hover": {
        backgroundColor: Colors.White,
        borderRadius: '0',
        borderImage: Colors.gradientGB,
        borderImageSlice: 1,
        borderWidth: '0 0  3px 0',
        borderStyle: 'solid',
    },
}))
