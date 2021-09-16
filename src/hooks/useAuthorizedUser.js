import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const [authorizedUser, setAuthorizedUser] = useState();
  const { loading, error, data, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  if (error) throw error;

  useEffect(() => {
    if (!loading && data) {
      setAuthorizedUser(data.authorizedUser);
    }
  }, [loading]);

  return { authorizedUser, loading, refetch };
};

export default useAuthorizedUser;
