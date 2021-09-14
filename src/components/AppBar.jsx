import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#24292e",
    marginHorizontal: 0,
  },
  tab: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.tab}>Sign in</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;
