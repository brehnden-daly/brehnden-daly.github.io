import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

interface AppTheme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      error: {
        main: string;
      };
    };
  }

  const Theme: AppTheme = createTheme({
    palette: {
      primary: {
        main: '#347396',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#e74c3c',
      },
    }
  });

  export default Theme;