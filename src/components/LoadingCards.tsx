import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from '@mui/material';
import type { FC } from 'react';

const LoadingCards: FC<{
  count: number;
}> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Grid
          key={index}
          item
          border={'1px solid rgba(0,0,0.14'}
          lg={2.5}
          sx={{ borderRadius: 2, width: { xs: '19.5rem', sm: '15rem' } }}
        >
          <Card
            sx={{
              maxWidth: '17.625rem',
              maxHeight: '30rem',
              bgcolor: 'rgba(32, 40, 62, 0.8)',
              padding: '8px',
              borderRadius: '12px',
            }}
          >
            <CardActionArea>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={400}
                sx={{ borderRadius: '12px' }}
              />
              <CardContent>
                <Skeleton animation="wave" variant="text" height={'1.5rem'} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default LoadingCards;
