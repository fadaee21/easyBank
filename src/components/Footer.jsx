import React from 'react'
import { Button, Grid, List, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Colors } from '../styles/theme'
import { Facebook, Instagram, Pintrest, Twitter, Youtube, EasyBankLogo } from '../assets/allSVGicons'
import { ButtonFooter, ButtonFooterIcon, GridButtonAndCopy, ListItemCenter } from '../styles/footer/footer'







const Footer = () => {
  return (
    <footer>
      <Box sx={{ backgroundColor: Colors.DarkBlue, p: { sm: '2rem 8rem', xs: '2rem' }, color: Colors.White }} >
        <Grid container >
          <Grid item md={7} sm={6} xs={12}  >
            <Grid container >
              <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <List>
                  <ListItemCenter>
                    <EasyBankLogo color={Colors.White} />
                  </ListItemCenter>
                  <ListItemCenter   >
                    <ButtonFooterIcon ><Facebook /></ButtonFooterIcon>
                    <ButtonFooterIcon><Instagram /></ButtonFooterIcon>
                    <ButtonFooterIcon><Twitter /></ButtonFooterIcon>
                    <ButtonFooterIcon><Youtube /></ButtonFooterIcon>
                    <ButtonFooterIcon><Pintrest /></ButtonFooterIcon>
                  </ListItemCenter>
                </List>
              </Grid>

              <Grid item md={4} xs={12}  >
                <List>
                  <ListItemCenter>
                    <ButtonFooter>
                      About Us
                    </ButtonFooter>
                  </ListItemCenter>
                  <ListItemCenter>
                    <ButtonFooter>
                      Contact
                    </ButtonFooter>
                  </ListItemCenter>
                  <ListItemCenter>
                    <ButtonFooter>
                      Blog
                    </ButtonFooter>
                  </ListItemCenter>
                </List>
              </Grid>

              <Grid item md={4} xs={12}  >
                <List sx={{ marginTop: { xs: '-16px', md: "0" } }}>
                  <ListItemCenter  >
                    <ButtonFooter>
                      Careers
                    </ButtonFooter>
                  </ListItemCenter>
                  <ListItemCenter  >
                    <ButtonFooter>
                      Support
                    </ButtonFooter>
                  </ListItemCenter>
                  <ListItemCenter >
                    <ButtonFooter>
                      Privacy Policy
                    </ButtonFooter>
                  </ListItemCenter>
                </List>
              </Grid>

            </Grid>
          </Grid>
          <GridButtonAndCopy item md={5} sm={6} xs={12} >
            <Button variant='gradient' >request invite</Button>
            <Typography variant='caption' sx={{ mt: '1rem', fontSize: 14, textAlign: 'center' }}>
              &copy; Easybank.All Rights Reserved
            </Typography>
          </GridButtonAndCopy>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer