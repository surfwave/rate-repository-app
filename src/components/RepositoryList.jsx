import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem item={item} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (!loading && repositories) {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
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

export default RepositoryList;
