import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, ButtonGroup, Modal, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PsychologyAlt, SickRounded, VideoCameraBack, Person, DateRange } from '@mui/icons-material';


const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e => setOpen(true)} title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', sm: 30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} borderRadius={3} p={3}>
        <Typography variant='h6' textAlign='center'>Create Post</Typography>
        <Box display='flex' alignItems='center' gap={2} mb={2} >
        <Avatar 
          alt="Cindy Baker" 
          src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg" 
        />
        <Typography fontWeight={500} variant='span'>Meow!</Typography>
        </Box>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          sx={{ width: '100%' }}
        />
        <Stack direction='row' gap={2} mt={2} mb={2} justifyContent='center'>
          <SickRounded color="primary" />
          <PsychologyAlt color="secondary" />
          <VideoCameraBack color="success"/>
          <Person color="error"/>
        </Stack>

        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
          <Button>Post</Button>
          <Button  sx={{ width: '100px'}}><DateRange /></Button>
        </ButtonGroup>
      </Box>
    </Modal>
    </>
  )
}

export default Add