import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (error) throw error;

  useEffect(() => {
    if (!loading && data) {
      setRepositories(data.repositories);
    }
  }, [loading]);

  return { repositories, loading, refetch };
};

export default useRepositories;
