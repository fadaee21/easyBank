import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../styles/theme'

import iconApi from '../assets/icon-api.svg'
import iconBudgeting from '../assets/icon-budgeting.svg'
import iconOnboarding from '../assets/icon-onboarding.svg'
import iconOnline from '../assets/icon-online.svg'


const data = [
  { icon: iconApi, header: "online banking", description: "  We leverage open banking to turn bank account into your financial hub. Control your finances never before" },
  { icon: iconBudgeting, header: "simple budgeting", description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits" },
  { icon: iconOnboarding, header: "fast onboarding", description: "We don't do branches, open your account in minutes online and start taking control of your finances right away" },
  { icon: iconOnline, header: "open API", description: "Manage you savings, investments pension, and much more from one account. Tracking your money has never easier" }
]


const Questioning = () => {
  return (

    <Box sx={{
      zIndex: 2,
      position: 'relative',
      backgroundColor: Colors.LightGrayishBlue,
      p: { md: '7rem', xs: '3rem' },
      
      textAlign: { xs: "center", sm: "start" },

    }}  >

      <Typography variant='h3'>Why choose Easybank?</Typography>
      <Typography variant='body2' sx={{ mt: '1rem' }}>
        we leverage Open Banking to turn bank account into your financial hub.<br />
        Control your finances never before
      </Typography>

      <List sx={{
        width: '100%',
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: 'row' },
        alignItems: { xs: 'center', sm: 'baseline' },

      }}>
        {data.map(({ icon, header, description }, i) => {
          return (
            <ListItem key={i} sx={{
              flexDirection: 'column',
              width: '20rem',
              mt: '2.5rem',
              alignItems: { xs: "center", sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <ListItemAvatar sx={{ transform: 'scale(1.7)', ml: '0.7rem' }} >
                <Avatar alt={header} src={icon} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant='h5' sx={{ mt: '1.5rem', textTransform: 'capitalize' }}>
                    {header}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ mt: '0.7rem' }} variant="subtitle2">
                    {description}
                  </Typography>
                }
              />
            </ListItem>
          )
        })}
      </List>

    </Box>

  )
}

export default Questioning