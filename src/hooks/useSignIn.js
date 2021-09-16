import { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [data, setData] = useState();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    },
  });
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    mutate({ variables: { username, password } });
  };

  useEffect(() => {
    if (result.data && result.data.authorize) {
      setData(result.data.authorize);
      authStorage
        .setAccessToken(result.data.authorize.accessToken)
        .then(() => apolloClient.resetStore())
        .then((info) => console.log("info:", info));
    }
  }, [result.data]);

  return [signIn, data];
};

export default useSignIn;
