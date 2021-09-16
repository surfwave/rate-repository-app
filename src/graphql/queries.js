import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      totalCount
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
      reviewCount
      reviews {
        edges {
          node {
            repository {
              id
              fullName
              ratingAverage
              reviewCount
              stargazersCount
              forksCount
              ownerAvatarUrl
              description
              language
            }
            rating
            text
          }
        }
      }
    }
  }
`;
