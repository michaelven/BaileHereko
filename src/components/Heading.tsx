import { Typography } from '@mui/material';

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => (
  <Typography
    component="h1"
    sx={{
      color: 'rgba(235, 238, 245, 1)',
      fontSize: '4rem',
      fontWeight: 600,
      lineHeight: '5rem',
      mb: '1rem',
    }}
  >
    {heading}
  </Typography>
);

export default Heading;
