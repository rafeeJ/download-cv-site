import { AppBar, Button, Card, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Content from './components/Content'

function App() {

  const downloadCV = () => {
    window.location.assign('http://localhost:5173/CV.pdf')
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rafee's Website
          </Typography>
          <Button onClick={downloadCV} color='inherit'>Download my CV</Button>
        </Toolbar>
      </AppBar>

      <Stack direction={'row'} justifyContent="center" spacing={12} padding={4}>
        <Content>This is something I have done.</Content>
        <Content>This is some other bit of content.</Content>
        <Content>Subscribe to my youtube channel - @rafeeJ </Content>
      </Stack>

    </div>
  )
}

export default App
