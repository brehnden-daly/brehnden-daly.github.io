// Third Party Imports
import React, {createContext} from 'react';
import {ThemeProvider, AppBar, Toolbar, Box, Button, Avatar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Theme
import Theme from './Themes/app_theme';

// Assets
import avatar from './Components/About/personal_0.jpg'


interface GlobalContextInterface {
  pages: Array<string>
}

const GlobalContext = createContext<GlobalContextInterface | null>(null);

const globalContextData: GlobalContextInterface = {
  pages: ["About", "Employment", "Projects"]
}


/**
 * 
 * @returns The base application consisting of the header and other React Components
 */
function App() {



  return (
    <GlobalContext.Provider value={globalContextData}>
      <ThemeProvider theme={Theme}>

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar variant="dense" sx={{backgroundColor: "#4D79CE"}}>
              <Box sx={{ flexGrow: 1 }}>
                <Avatar alt="Brehnden" src={avatar}></Avatar>
              </Box>

              {globalContextData.pages.map( (page) => (
                <Button color="inherit" href={"/#/" + page}>{page}</Button>
              ) )}

            </Toolbar>
          </AppBar>
        </Box>

      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
