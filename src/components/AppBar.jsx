import React, { useState, useImperativeHandle } from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import useAuthStorage from "../hooks/useAuthStorage";

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

// eslint-disable-next-line react/display-name
const AppBar = React.forwardRef((props, ref) => {
  const [token, setToken] = useState(null);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const authStorage = useAuthStorage();

  const changeIsRefreshed = () => {
    setIsRefreshed(true);
  };

  useImperativeHandle(ref, () => {
    return {
      changeIsRefreshed,
    };
  });

  console.log("isRefreshed:", isRefreshed);

  if (isRefreshed) {
    authStorage.getAccessToken().then((newToken) => {
      console.log("newToken:", newToken);
      if (newToken) {
        setToken(newToken);
      } else {
        setToken(null);
      }
      setIsRefreshed(false);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>
        {!token ? (
          <Link to="/signin">
            <Text style={styles.tab}>Sign in</Text>
          </Link>
        ) : (
          <>
            <Link to="/me">
              <Text style={styles.tab}>Me</Text>
            </Link>
            <Link to="/signout">
              <Text style={styles.tab}>Sign out</Text>
            </Link>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});

export default AppBar;
