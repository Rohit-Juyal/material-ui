import { Avatar, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} display={{ xs: 'none', sm: 'block' }} p={2} >
      <Box position='fixed'>
        <Typography variant='h6' fontWeight='100'>Online Friends</Typography>
        <AvatarGroup max={6} sx={{ display: 'flex', justifyContent: 'center'}}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight='100' sx={{ mt:2, mb:2}}>Latest Photos</Typography>
        <ImageList sx={{ width: '100%', overflow: 'hidden'}} cols={3} gap={5} rowHeight={150}>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight='100' sx={{ mt:2}}>Latest Conversation</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Rightbar