import { useEffect, useState } from 'react';
import { useGetMultipleMedia } from '../service/graphql/hooks';
import MediaCard from '../components/MediaCard';
import { Container, Grid, Stack, Typography } from '@mui/material';
import BaileHereko from '../components/BaileHereko';
import Heading from '../components/Heading';
import { useTranslation } from 'react-i18next';

const FavoritesPage = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteIds(favorites);
  }, []);

  const { data, loading, error } = useGetMultipleMedia(favoriteIds);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'} justifyContent={'center'}>
        <BaileHereko />
        <Heading heading={t('favorites')} />
        <Typography
          sx={{
            color: 'rgba(142, 149, 169, 1)',
            maxWidth: '36.75rem',
            lineHeight: '1.5rem',
          }}
        >
          {t('favoritesDescription')}
        </Typography>
        <Typography
          sx={{ mt: '1rem', mb: '1.5rem', color: 'rgba(118, 126, 148, 1)' }}
        >
          {favoriteIds.length}{' '}
          {favoriteIds.length > 1 ? t('titles') : t('title')}
        </Typography>
      </Stack>

      <Grid container gap={'1.5rem'} justifyContent={'center'} mb={'3rem'}>
        {data?.Page!.media!.map((media) => {
          if (!media) return null;

          const { id, title, coverImage, type, averageScore } = media;
          const displayTitle = title?.english || title?.romaji;
          const displayCoverImage = coverImage?.extraLarge;

          if (
            !id ||
            !displayTitle ||
            !displayCoverImage ||
            !type ||
            !averageScore
          )
            return null;

          return (
            <MediaCard
              key={id}
              id={id}
              title={displayTitle}
              coverImage={displayCoverImage}
              type={type}
              score={averageScore}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
