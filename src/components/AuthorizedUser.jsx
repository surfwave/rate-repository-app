import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useAuthorizedUser from "../hooks/useAuthorizedUser";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem item={item} />;

const AuthorizedUser = () => {
  const { authorizedUser, loading } = useAuthorizedUser();

  if (!loading && authorizedUser) {
    const repositoryNodes = authorizedUser
      ? authorizedUser.reviews.edges.map((edge) => edge.node.repository)
      : [];
    return (
      <FlatList
        data={repositoryNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default AuthorizedUser;
