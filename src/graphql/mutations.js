import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signin($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      user {
        id
      }
      accessToken
    }
  }
`;
