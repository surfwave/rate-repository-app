import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const RepositoryItem = ({ item }) => {
  const {
    // id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;

  const styles = StyleSheet.create({
    item: {
      backgroundColor: "white",
      padding: 8,
      marginVertical: 4,
      marginHorizontal: 2,
    },
    personContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      height: 80,
      marginBottom: 10,
    },
    nameAndDescContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },
    ratingContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    ratingItem: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatar: {
      width: 50,
      height: 50,
    },
    languageContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      flexGrow: 0,
    },
    language: {
      backgroundColor: "#0366d6",
      color: "#FFFFFF",
      fontWeight: "700",
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
  });

  return (
    <View style={styles.item}>
      <View style={styles.personContainer}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.nameAndDescContainer}>
          <Text fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text color="textSecondary">{description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingItem}>
          <Text fontWeight="bold">
            {stargazersCount > 999
              ? `${(stargazersCount / 1000).toFixed(1)}K`
              : stargazersCount}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.ratingItem}>
          <Text fontWeight="bold">
            {forksCount > 999
              ? `${(forksCount / 1000).toFixed(1)}K`
              : forksCount}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.ratingItem}>
          <Text fontWeight="bold">
            {reviewCount > 999
              ? `${(reviewCount / 1000).toFixed(1)}K`
              : reviewCount}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.ratingItem}>
          <Text fontWeight="bold">
            {ratingAverage > 999
              ? `${(ratingAverage / 1000).toFixed(1)}K`
              : ratingAverage}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
