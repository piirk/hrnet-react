import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PageNotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 100 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Oops, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
        Back to homepage
      </Button>
    </Box>
  )
}

export default PageNotFound
