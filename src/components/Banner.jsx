import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { BGIntroDesktop, BGIntroMobile } from '../assets/allSVGicons'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import image from '../assets/image-mockups.png'
import { GridBanner, GridBannerItemsContent } from '../styles/banner/GridBanner'
const Banner = () => {

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  return (

    <GridBanner container  >
      <GridBannerItemsContent item xs={12} sm={6} sx={{ height: { xs: 'fit-content', sm: 'inherit' } }}>
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


      <Grid item xs={12} sm={6} sx={{
        position: 'relative',
        order: { xs: -1, sm: 1 },
        height: { xs: '23rem', sm: '35rem' }
      }}>
        <Box sx={{
          position: 'absolute',
          top: { sm: '-275px', xs: '0' },
          right: { md: '-550px', sm: '-600px', xs: 0 },
          transform: { md: 'scale(0.9)', sm: 'scale(0.6)', xs: 'scale(1.1)' },
          overflow: 'hidden',
        }}>
          {matches ? <BGIntroMobile /> : <BGIntroDesktop />}
        </Box>

        <Box
          component="img"
          sx={{
            position: 'absolute',
            top: { sm: '-160px', xs: '-370px' },
            right: { md: '-200px', sm: '-250px', xs: '-195px' },
            transform: { md: 'scale(0.9)', sm: 'scale(0.6)', xs: 'scale(0.48)' },
            zIndex: 5


          }}
          alt="screen of mobile"
          src={image}
        />

      </Grid>
    </GridBanner>

  )
}

export default Banner

