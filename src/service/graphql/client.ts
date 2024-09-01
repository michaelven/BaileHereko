import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
// import { VITE_APP_BASE_URL } from '../../config';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache,
});
