import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface MediaCardProps {
  coverImage?: string | undefined;
  title: string | undefined;
  type: string | undefined;
  id: number | undefined;
  score: number | undefined;
}

const MediaCard: FC<MediaCardProps> = ({
  coverImage,
  title,
  type,
  id,
  score,
}) => {
  return (
    <Grid
      item
      border={'1px solid rgba(0,0,0.14'}
      lg={2.5}
      sx={{ borderRadius: 2, width: { xs: '19.5rem', sm: '15rem' } }}
    >
      <Link
        to={type === 'MANGA' ? `/manga/${id}` : `/anime/${id}`}
        style={{ textDecoration: 'none' }}
      >
        <Card
          sx={{
            maxWidth: '17.625rem',
            maxHeight: '30rem',
            bgcolor: 'rgba(32, 40, 62, 0.5)',
            padding: '8px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
          }}
        >
          <CardActionArea>
            <Box sx={{ position: 'relative' }}>
              <Stack
                sx={{
                  position: 'absolute',
                  flexDirection: 'row',
                  top: '8px',
                  left: '5px',
                  bgcolor: 'rgba(0, 0, 0, 0.65)',
                  borderRadius: '0.5rem',
                  width: '3.7rem',
                  height: '2rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 173, 73, 1)',
                  gap: '4px',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z"
                    stroke="#FFAD49"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Typography color={'rgba(255, 173, 73, 1)'} fontSize={'1rem'}>
                  {score! / 10}
                </Typography>
              </Stack>
              <CardMedia
                component="img"
                height="400"
                image={coverImage}
                alt="green iguana"
                sx={{
                  borderRadius: '12px',
                }}
              />
            </Box>

            <CardContent>
              <Typography sx={{ fontWeight: 600, lineHeight: '1.5rem' }}>
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default MediaCard;
