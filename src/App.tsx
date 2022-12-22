import React, {createContext} from 'react';
import {AppBar, Container, Toolbar, Box, Menu, MenuItem, Typography} from '@mui/material';

interface GlobalContextInterface {
  pages: Array<string>
}

const GlobalContext = createContext<GlobalContextInterface | null>(null);

const globalContextData: GlobalContextInterface = {
  pages: ["About Me", "Employment"]
}


/**
 * 
 * @returns The base application consisting of the header and other React Components
 */
function App() {


  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };



  return (
    <GlobalContext.Provider value={globalContextData}>
      
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

              <Menu id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
                {/* {globalContextData.pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </GlobalContext.Provider>
  );
}

export default App;
