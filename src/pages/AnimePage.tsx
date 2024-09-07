import { Button, Container, Stack, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import MediaList from '../components/MediaList';
import BaileHereko from '../components/BaileHereko';
import Heading from '../components/Heading';
import { useTranslation } from 'react-i18next';

const AnimePage: FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const { t } = useTranslation();

  return (
    <Container>
      <Stack mt={'5rem'} mb={'1.5rem'}>
        <BaileHereko />
        <Heading heading={t('anime')} />
      </Stack>
      <SearchFilter
        setSearch={setSearch}
        setPage={setPage}
        placeholder={t('animeSearch')}
      />
      <Typography
        sx={{ mt: '3rem', mb: '1.5rem', color: 'rgba(118, 126, 148, 1)' }}
      >
        {itemCount} {itemCount > 1 ? t('titles') : t('title')}
      </Typography>
      <MediaList
        page={page}
        search={search}
        type={'ANIME'}
        setItemCount={setItemCount}
        setHasNextPage={setHasNextPage}
      />
      <Stack direction={'row'} justifyContent={'center'} m={'2rem auto 3rem'}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          {t('prev')}
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
          {t('next')}
        </Button>
      </Stack>
    </Container>
  );
};

export default AnimePage;
