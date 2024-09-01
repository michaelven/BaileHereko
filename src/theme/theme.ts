import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Poppins',
        color: 'rgba(235, 238, 245, 1)',
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        color: 'error',
      },
    },
  },
});
