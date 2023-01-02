// Third Party Imports
import {useState} from 'react';
import {ThemeProvider, AppBar, Toolbar, Box, Button, Avatar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Theme
import Theme from './Themes/app_theme';

// Assets
import avatar from './Components/About/images/personal_0.jpg'




const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var barFontSize = 14;
if (vw < 800) {
  barFontSize = 11;
}


/**
 * 
 * @returns The base application consisting of the header and other React Components
 */
function App() {

  const [pages, setPages] = useState<Array<string>>(["About", "Employment", "Projects", "Contact"]);

  return (
    
      <ThemeProvider theme={Theme}>

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar variant="dense" sx={{backgroundColor: "#4D79CE"}}>
              <Box sx={{ flexGrow: 1 }}>
                <Avatar alt="Brehnden" src={avatar}></Avatar>
              </Box>

              {pages.map( (page) => (
                <Button color="inherit" href={"/#/" + page} sx={{fontSize: barFontSize}}>{page}</Button>
              ) )}

            </Toolbar>
          </AppBar>
        </Box>

      </ThemeProvider>
  );
}

export default App;
