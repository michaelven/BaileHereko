import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Media, Page } from '../../__generated__/graphql';
import { useEffect, useState } from 'react';

export const GET_PAGE = gql`
  query GET_ALL($type: MediaType, $search: String, $page: Int) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        hasNextPage
      }
      media(type: $type, search: $search) {
        id
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
        }
        averageScore
      }
    }
  }
`;

export const GET_ANIME = gql`
  query Get_Anime($mediaId: Int) {
    Media(id: $mediaId) {
      id
      description
      averageScore
      type
      bannerImage
      coverImage {
        extraLarge
      }
      genres
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      duration
      title {
        english
        romaji
      }
      episodes
      status
      streamingEpisodes {
        title
        thumbnail
        url
      }
    }
  }
`;

export const GET_MANGA = gql`
  query Get_Manga($mediaId: Int) {
    Media(id: $mediaId) {
      id
      title {
        english
        romaji
      }
      type
      bannerImage
      coverImage {
        extraLarge
      }
      averageScore
      genres
      startDate {
        year
        month
        day
      }
      volumes
      chapters
      status
      description
    }
  }
`;

export const GET_MULTIPLE_MEDIA = gql`
  query Get_Multiple_Media($ids: [Int]) {
    Page(page: 1, perPage: 50) {
      media(id_in: $ids) {
        id
        title {
          english
          romaji
        }
        type
        coverImage {
          extraLarge
        }
        averageScore
      }
    }
  }
`;

export const useGetPage = (
  type: string | undefined,
  search: string | undefined,
  page: number,
) => {
  const { data, loading, error } = useQuery<{ Page: Page }>(GET_PAGE, {
    variables: {
      type: type || undefined,
      search: search || undefined,
      page: page,
    },
  });

  return { data, loading, error };
};

export const useGetAnime = (id: string) => {
  const { data, loading, error } = useQuery<{ Media: Media }>(GET_ANIME, {
    variables: {
      mediaId: id,
    },
  });

  return { data, loading, error };
};

export const useGetManga = (id: string) => {
  const { data, loading, error } = useQuery<{ Media: Media }>(GET_MANGA, {
    variables: {
      mediaId: id,
    },
  });

  return { data, loading, error };
};

export const useGetMultipleMedia = (ids: number[]) => {
  const { data, loading, error } = useQuery<{ Page: Page }>(
    GET_MULTIPLE_MEDIA,
    {
      variables: {
        ids,
      },
    },
  );

  return { data, loading, error };
};

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
