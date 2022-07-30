import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { BGIntroDesktop, BGIntroMobile } from '../assets/allSVGicons'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import image from '../assets/image-mockups.png'
import { BgIntroBox, BgIntroGrid, GridBanner, GridBannerItemsContent, ImageBannerComponent } from '../styles/banner'

const Banner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <section>
      <GridBanner container  >
        <GridBannerItemsContent item xs={12} sm={6} >
          <Container maxWidth='xs' >
            <Grid container rowSpacing={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Grid item>
                <Typography variant='h3' sx={{ fontSize: { sm: '3rem' } }} >
                  Next generation digital banking
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' >
                  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </Typography>
              </Grid>
              <Grid item sx={{ mx: { xs: 'auto', sm: "0" }, mb: { xs: '2rem', sm: 0 } }} >
                <Button variant='gradient'>
                  request invite
                </Button>
              </Grid>
            </Grid>
          </Container>
        </GridBannerItemsContent>
        <BgIntroGrid item xs={12} sm={6}>
          <BgIntroBox >
            {matches ? <BGIntroMobile /> : <BGIntroDesktop />}
          </BgIntroBox>
          <ImageBannerComponent
            component="img"
            alt="screen of mobile"
            src={image}
          />
        </BgIntroGrid>
      </GridBanner>

    </section>
  )
}

export default Banner

