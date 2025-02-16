import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HRnet
        </Typography>

        {/* Navigation Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/employee/create">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/employee/list">
            Employees
          </Button>
          <Button color="inherit" component={Link} to="/employee/create">
            Create Employee
          </Button>
        </Box>

        {/* Menu Burger Mobile */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            component={Link}
            to="/employee/create"
            onClick={handleMenuClose}
          >
            Home
          </MenuItem>
          <MenuItem
            component={Link}
            to="/employee/list"
            onClick={handleMenuClose}
          >
            Employees
          </MenuItem>
          <MenuItem
            component={Link}
            to="/employee/create"
            onClick={handleMenuClose}
          >
            Create Employee
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
