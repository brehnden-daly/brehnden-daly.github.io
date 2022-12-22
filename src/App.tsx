// Third Party Imports
import React, {createContext} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider, AppBar, Toolbar, Box, Button, Avatar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// First Party Imports
import About from './Components/About';
import Employment from './Components/Employment';
import Projects from './Components/Projects';

// Theme
import Theme from './Themes/app_theme';


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

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Employment" element={<Employment />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>




        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Avatar>BD</Avatar>
                {/* <Typography>
                  Brehnden Daly
                </Typography> */}
              </Box>
              
              {globalContextData.pages.map( (page) => (
                <Button color="inherit" href={"/" + page}>{page}</Button>
              ) )}

            </Toolbar>
          </AppBar>
        </Box>

      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
