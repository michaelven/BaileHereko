import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface EpisodeCardProps {
  thumbnail: string;
  title: string;
  url: string;
}

const EpisodeCard: FC<EpisodeCardProps> = ({ thumbnail, title, url }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={url} sx={{ textDecoration: 'none' }} target="_blank">
        <Card
          sx={{
            width: '100%',
            maxWidth: '22rem',
            bgcolor: 'rgba(32, 40, 62, 0.5)',
            padding: '8px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={thumbnail}
              sx={{
                borderRadius: '12px',
                height: '15rem',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
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

export default EpisodeCard;
