import { Button, Container, Stack, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import MediaList from '../components/MediaList';
import BaileHereko from '../components/BaileHereko';
import Heading from '../components/Heading';

const MangaPage: FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'}>
        <BaileHereko />
        <Heading heading="Manga" />
      </Stack>
      <SearchFilter setSearch={setSearch} />
      <Typography
        sx={{ mt: '3rem', mb: '1.5rem', color: 'rgba(118, 126, 148, 1)' }}
      >
        {itemCount} items
      </Typography>
      <MediaList
        page={page}
        search={search}
        type={'MANGA'}
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

export default MangaPage;
