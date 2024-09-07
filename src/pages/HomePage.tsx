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
import Heading from '../components/Heading';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const [mediaType, setMediaType] = useState<string | null>('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const { t } = useTranslation();
  const toggles = ['all', 'anime', 'manga'];

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
            maxWidth: '38.75rem',
            lineHeight: '1.5rem',
          }}
        >
          {t('homeDescription')}
        </Typography>
      </Stack>
      <SearchFilter
        setSearch={setSearch}
        setPage={setPage}
        placeholder={t('homeSearch')}
      />
      <ToggleButtonGroup
        value={mediaType}
        exclusive
        onChange={handleMediaType}
        aria-label="Type"
        sx={{
          display: 'block',
          width: '15.25rem',
          mt: '5rem',
          mb: '2rem',
          backgroundColor: '#1C1C2C',
          borderRadius: '8px',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        {toggles.map((toggle: string) => (
          <ToggleButton
            value={toggle === 'all' ? '' : toggle}
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
            {t(toggle)}
          </ToggleButton>
        ))}
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
        {!mediaType ? t('all') : t(mediaType)}
        <Typography
          component={'span'}
          sx={{
            mt: '3rem',
            mb: '1.5rem',
            pl: 1,
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

export default HomePage;
