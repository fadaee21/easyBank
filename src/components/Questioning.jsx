import React from 'react'
import { Avatar, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { InfoList, InfoListItem, QuestionBox } from '../styles/questioning'
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
    <section>
      <QuestionBox >
        <Typography variant='h3'>Why choose Easybank?</Typography>
        <Typography variant='body2' sx={{ mt: '1rem' }}>
          we leverage Open Banking to turn bank account into your financial hub.<br />
          Control your finances never before
        </Typography>

        <InfoList>
          {data.map(({ icon, header, description }, i) => {
            return (
              <InfoListItem key={i}>
                <ListItemAvatar sx={{ transform: 'scale(1.7)', ml: '0.7rem' }} >
                  <Avatar alt={header} src={icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant='h5' sx={{ mt: '1.5rem', textTransform: 'capitalize' }}>
                    {header}
                  </Typography>}
                  secondary={<Typography sx={{ mt: '0.7rem' }} variant="subtitle2">
                    {description}
                  </Typography>}
                />
              </InfoListItem>
            )
          })}
        </InfoList>
      </QuestionBox>
    </section>

  )
}

export default Questioning