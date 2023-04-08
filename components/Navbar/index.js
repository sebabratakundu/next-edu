import {AppBar, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
      <AppBar position="static" color="secondary">
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
              <Link href={'/'} className={router.route === '/' ? 'active p-10': 'p-10'}>Home</Link>
              <Link href={'/courses'} className={router.route === '/courses' ? 'active p-10': 'p-10'}>Courses</Link>
              <Link href={'/about'} className={router.route === '/about' ? 'active p-10': 'p-10'}>About</Link>
            </Stack>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar;