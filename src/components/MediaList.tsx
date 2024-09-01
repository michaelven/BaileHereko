import { Box, Grid } from '@mui/material';
import { useGetPage } from '../service/graphql/hooks';
import MediaCard from './MediaCard';
import LoadingCards from './LoadingCards';
import { FC, useEffect } from 'react';

interface MediaListProps {
  type: string | undefined;
  search: string | undefined;
  page: number;
  setItemCount: (count: number) => void;
  setHasNextPage: (hasNextPage: boolean) => void;
}

const MediaList: FC<MediaListProps> = ({
  type,
  search,
  page,
  setItemCount,
  setHasNextPage,
}) => {
  const { data, loading, error } = useGetPage(type, search, page);

  useEffect(() => {
    if (data?.Page?.media) {
      setItemCount(data.Page.media.length);
      setHasNextPage(data.Page.pageInfo?.hasNextPage ?? false);
    } else {
      setItemCount(0);
      setHasNextPage(false);
    }
  }, [data, setItemCount, setHasNextPage]);

  if (error) return <h1>Error...</h1>;

  const media = data?.Page.media;

  return (
    <Box>
      <Grid container gap={'1.5rem'} justifyContent={'center'}>
        {loading ? (
          <LoadingCards count={20} />
        ) : (
          media?.map((anime) =>
            anime?.id &&
            anime?.coverImage?.extraLarge &&
            anime?.title?.english ? (
              <MediaCard
                key={anime.id}
                id={anime.id}
                coverImage={anime.coverImage.extraLarge}
                title={anime.title.english}
                type={type}
                score={anime.averageScore!}
              />
            ) : null,
          )
        )}
      </Grid>
    </Box>
  );
};

export default MediaList;
