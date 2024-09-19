import { Box, CircularProgress } from '@mui/material';

const LoadingCircle = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingCircle;
