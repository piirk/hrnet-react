import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ textAlign: 'center', py: 2, mt: 'auto', bgcolor: 'grey.200' }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} HRnet. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
