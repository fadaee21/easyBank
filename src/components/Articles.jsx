import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import currency from '../assets/image/image-currency.jpg'
import restaurant from '../assets/image/image-restaurant.jpg'
import confetti from '../assets/image/image-confetti.jpg'
import plane from '../assets/image/image-plane.jpg'


const data = [
  { image: currency, author: "claire robinson", title: "Receive money in any currency with no fees", description: "The world is getting smaller and we're becoming more mobile.So why should you be forces to only receive money in a single..." },
  { image: restaurant, author: "wilson hutton", title: "Treat your self without worrying about money", description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ... " },
  { image: plane, author: "wilson hutton", title: "Take your Easybank card whenever you go", description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad we'll show you..." },
  { image: confetti, author: "claire robinson", title: "Our invite-only Beta accounts are now live", description: "After a lot of hard woek by the whole team we're excited to launch our closed beta. It's easy to request an invite through the site..." },
]

const Articles = () => {
  return (
    <section>
      <Box sx={{
        my: "6rem",
        mx: { md: '7rem', sm: '3rem', xs: 'auto' }
      }}>
        <Typography variant='h3' sx={{
          textAlign: { xs: 'center', sm: 'left' }
        }} >
          Latest Articles
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: { sm: 'space-between', xs: 'center' },
          flexDirection: { sm: 'row', xs: 'column' },
          alignContent: 'center',
          width: '100%',
          mt: '3rem',
        }}>
          {data.map(({ image, author, title, description }, i) => {
            return (
              <Card sx={{
                maxWidth: { xs: '90%', sm: '23%' },
                mx: { xs: 'auto', sm: 0 }
              }}
                elevation={0} key={i} >
                <CardMedia
                  component="img"
                  image={image}
                  alt="green iguana"
                  sx={{ height: 190 }}
                />
                <CardContent>
                  <Typography variant='caption'>
                    By {author}
                  </Typography>
                  <Typography my={1} variant="h6">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Box>
    </section>
  )
}

export default Articles