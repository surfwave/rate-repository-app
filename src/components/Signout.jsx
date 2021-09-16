import React from "react";
import { View, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { useApolloClient } from "@apollo/client";

import Text from "./Text";
import { useHistory } from "react-router-dom";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "white",
  },
  currentUserText: {
    height: 50,
    color: "black",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "700",
  },
  signoutButton: {
    borderRadius: 14,
    backgroundColor: "orange",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  singoutButtonText: {
    height: 50,
    color: "white",
    textAlign: "center",
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "700",
  },
});

const SignOut = ({ refresh }) => {
  const authStorage = useAuthStorage();
  const history = useHistory();
  const apolloClient = useApolloClient();

  const signoutHandler = async () => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      refresh();
      history.push("/signin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.currentUserText}>当前用户：</Text>
      </View>
      <Pressable onPress={signoutHandler}>
        <View style={styles.signoutButton}>
          <Text style={styles.singoutButtonText}>Sign out</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignOut;
