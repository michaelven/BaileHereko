/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GET_ALL($type: MediaType, $search: String, $page: Int) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        hasNextPage\n      }\n      media(type: $type, search: $search) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n':
    types.Get_AllDocument,
  '\n  query Get_Anime($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      description\n      averageScore\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      duration\n      title {\n        english\n        romaji\n      }\n      episodes\n      status\n      streamingEpisodes {\n        title\n        thumbnail\n        url\n      }\n    }\n  }\n':
    types.Get_AnimeDocument,
  '\n  query Get_Manga($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      averageScore\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      volumes\n      chapters\n      status\n      description\n    }\n  }\n':
    types.Get_MangaDocument,
  '\n  query Get_Multiple_Media($ids: [Int]) {\n    Page(page: 1, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          english\n          romaji\n        }\n        type\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n':
    types.Get_Multiple_MediaDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GET_ALL($type: MediaType, $search: String, $page: Int) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        hasNextPage\n      }\n      media(type: $type, search: $search) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GET_ALL($type: MediaType, $search: String, $page: Int) {\n    Page(page: $page, perPage: 20) {\n      pageInfo {\n        hasNextPage\n      }\n      media(type: $type, search: $search) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query Get_Anime($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      description\n      averageScore\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      duration\n      title {\n        english\n        romaji\n      }\n      episodes\n      status\n      streamingEpisodes {\n        title\n        thumbnail\n        url\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Get_Anime($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      description\n      averageScore\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      duration\n      title {\n        english\n        romaji\n      }\n      episodes\n      status\n      streamingEpisodes {\n        title\n        thumbnail\n        url\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query Get_Manga($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      averageScore\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      volumes\n      chapters\n      status\n      description\n    }\n  }\n',
): (typeof documents)['\n  query Get_Manga($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      type\n      bannerImage\n      coverImage {\n        extraLarge\n      }\n      averageScore\n      genres\n      startDate {\n        year\n        month\n        day\n      }\n      volumes\n      chapters\n      status\n      description\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query Get_Multiple_Media($ids: [Int]) {\n    Page(page: 1, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          english\n          romaji\n        }\n        type\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Get_Multiple_Media($ids: [Int]) {\n    Page(page: 1, perPage: 50) {\n      media(id_in: $ids) {\n        id\n        title {\n          english\n          romaji\n        }\n        type\n        coverImage {\n          extraLarge\n        }\n        averageScore\n      }\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
