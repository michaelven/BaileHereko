import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetManga } from '../../service/graphql/hooks';
import LoadingCards from '../../components/LoadingCards';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const DetailedMangaPage: FC = () => {
  const params = useParams();

  const { data, loading, error } = useGetManga(params.id!);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (data && data.Media) {
      setIsFavorite(favorites.includes(data.Media.id));
    }
  }, [data]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(data?.Media.id)) {
      favorites = favorites.filter((favId: number) => favId !== data?.Media.id);
      setIsFavorite(false);
    } else {
      favorites.push(data?.Media.id);
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  if (loading) return <LoadingCards count={20} />;

  if (error) return <h1>{error.message}</h1>;

  if (!data || !data.Media) {
    return <Typography>No data found</Typography>;
  }

  const manga = data.Media;

  return (
    <Container sx={{ mb: '10rem' }}>
      <Box
        sx={{
          position: 'relative',
          mt: '2.5rem',
          width: '75rem',
          mb: '9.5rem',
        }}
      >
        <img
          width={'100%'}
          src={manga.bannerImage!}
          alt="Banner"
          style={{ borderRadius: '2.5rem' }}
        />
        <Stack
          sx={{
            position: 'absolute',
            top: '75%',
            left: '7%',
            bgcolor: 'rgba(32, 40, 62, 0.8)',
            width: '30rem',
            height: '7rem',
            borderRadius: '1.5rem',
            justifyContent: 'center',
            pl: '2.5rem',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(190, 183, 251, 1)',
              mb: '0.5rem',
            }}
          >
            BaileHereko / Manga
          </Typography>
          <Typography
            sx={{ fontSize: '2rem', fontWeight: 600, lineHeight: '2.5rem' }}
          >
            {manga?.title?.english ? manga.title?.english : manga.title?.romaji}
          </Typography>
        </Stack>
      </Box>
      <Stack direction={'row'} gap={'5rem'} sx={{ justifyContent: 'center' }}>
        <Box>
          <img
            src={manga!.coverImage!.extraLarge!}
            alt="Cover image"
            style={{ width: '30rem', height: '45rem', borderRadius: '1.5rem' }}
          />
        </Box>
        <Stack gap={'1.5rem'}>
          <Typography sx={{ width: '30rem', color: 'rgba(142, 149, 169, 1)' }}>
            {manga.description!.replace(/<[^>]*>/g, '')}
          </Typography>
          <Stack
            direction={'row'}
            sx={{
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
              {manga.averageScore! / 10}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>Type</Typography>
              <Typography fontSize={'1.3rem'}>{manga.type}</Typography>
            </Stack>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>Status</Typography>
              <Typography fontSize={'1.3rem'}>{manga.status}</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                First air date
              </Typography>
              <Typography fontSize={'1.3rem'}>
                {`${manga.startDate?.year}-${manga.startDate?.month}-${manga.startDate?.day}`}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'12rem'}>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>Volumes</Typography>
              <Typography fontSize={'1.3rem'}>
                {manga.volumes || 'Unknown'}
              </Typography>
            </Stack>
            <Stack>
              <Typography color={'rgba(118, 126, 148, 1)'}>
                No. of chapters
              </Typography>
              <Typography fontSize={'1.3rem'}>
                {manga.chapters || 'Unknown'}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography color={'rgba(118, 126, 148, 1)'}>Genres</Typography>
            <Typography fontSize={'1.3rem'}>
              {manga.genres?.join(', ')}
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            startIcon={<BookmarkIcon />}
            sx={{ width: '10rem' }}
            onClick={handleFavorite}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default DetailedMangaPage;
