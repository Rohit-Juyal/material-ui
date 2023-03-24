import { Notifications, SickRounded } from '@mui/icons-material'
import  MailIcon  from '@mui/icons-material/Mail'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
}) 

const Search = styled("div") (({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "20px",
    width: "40%"
}))

const Icons = styled(Box) (({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Navbar🐱</Typography>
            <SickRounded sx={{ display: { xs: "block", sm: "none  " } }} />
            <Search>
                <InputBase placeholder='Search...' sx={{ color: "black", width: '100%'}}/>
            </Search>
            <Icons sx={{ display: { xs: 'none', sm: 'flex'}}}>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={1} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{ height: 30, width: 30, cursor: 'pointer'}} src="https://thumbs.dreamstime.com/b/random-cat-love-cats-pet-catsslave-110819582.jpg" onClick={e => setOpen(true)} />
            </Icons>
            <Icons sx={{ display: { xs: 'flex', sm: 'none'}}}>
                <Avatar sx={{ height: 30, width: 30, cursor: 'pointer' }} src="https://thumbs.dreamstime.com/b/random-cat-love-cats-pet-catsslave-110819582.jpg" onClick={e => setOpen(true)}/>
                <Typography variant='span'>Cat</Typography>
            </Icons>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar