import {
  Button,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState, type FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import MediaList from '../components/MediaList';
import BaileHereko from '../components/BaileHereko';
import Heading from '../components/Heading';

const HomePage: FC = () => {
  const [mediaType, setMediaType] = useState<string | null>('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const handleMediaType = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null && newAlignment !== mediaType)
      setMediaType(newAlignment);
    setPage(1);
  };

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'}>
        <Heading heading="BaileHereko" />
        <Typography
          sx={{
            color: 'rgba(142, 149, 169, 1)',
            maxWidth: '36.75rem',
            lineHeight: '1.5rem',
          }}
        >
          List of anime and manga, I, Pramod Poudel have watched and read till
          date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </Typography>
      </Stack>
      <SearchFilter setSearch={setSearch} />
      <ToggleButtonGroup
        value={mediaType}
        exclusive
        onChange={handleMediaType}
        aria-label="Type"
        sx={{
          display: 'block',
          width: '14.5rem',
          mt: '5rem',
          mb: '2rem',
          backgroundColor: '#1C1C2C',
          borderRadius: '8px',
          padding: '5px',
        }}
      >
        <ToggleButton
          value=""
          sx={{
            color: 'rgba(235, 238, 245, 1)',
            '&.Mui-selected': {
              backgroundColor: '#7F56D9',
              color: '#fff',
            },
            textTransform: 'none',
            fontWeight: '600',
            borderRadius: '8px',
            padding: '10px 20px',
            flex: 1,
          }}
        >
          All
        </ToggleButton>
        <ToggleButton
          value="Anime"
          sx={{
            color: 'rgba(235, 238, 245, 1)',
            '&.Mui-selected': {
              backgroundColor: '#7F56D9',
              color: '#fff',
            },
            textTransform: 'none',
            fontWeight: '600',
            borderRadius: '8px',
            padding: '10px 20px',
            flex: 1,
          }}
        >
          Anime
        </ToggleButton>
        <ToggleButton
          value="Manga"
          sx={{
            color: 'rgba(235, 238, 245, 1)',
            '&.Mui-selected': {
              backgroundColor: '#7F56D9',
              color: '#fff',
            },
            textTransform: 'none',
            fontWeight: '600',
            borderRadius: '8px',
            padding: '10px 20px',
            flex: 1,
          }}
        >
          Manga
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography
        variant="h4"
        sx={{
          fontSize: '2rem',
          color: 'rgba(118, 126, 148, 1)',
          fontWeight: 600,
          lineHeight: '3rem',
          mb: '1.5rem',
        }}
      >
        {!mediaType ? 'All' : mediaType}{' '}
        <Typography
          component={'span'}
          sx={{
            mt: '3rem',
            mb: '1.5rem',
            color: 'rgba(118, 126, 148, 1)',
          }}
        >
          ({itemCount})
        </Typography>
      </Typography>
      <MediaList
        page={page}
        search={search}
        type={mediaType?.toUpperCase()}
        setItemCount={setItemCount}
        setHasNextPage={setHasNextPage}
      />
      <Stack direction={'row'} justifyContent={'center'} m={'2rem auto 3rem'}>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <Button onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
          Next
        </Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
