import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
      <AppBar position="static">
          <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
              </Typography>
            <Stack direction="row" spacing={3}>
              <Link href={'/'}>Home</Link>
              <Link href={'/courses'}>Courses</Link>
              <Link href={'/about'}>About</Link>
            </Stack>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar;