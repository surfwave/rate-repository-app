import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SignOut from "./Signout";
import AppBar from "./AppBar";
import AuthorizedUser from "./AuthorizedUser";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  const appBarRef = useRef();
  const refreshAppBar = () => {
    appBarRef.current.changeIsRefreshed();
  };

  return (
    <View style={styles.container}>
      <AppBar ref={appBarRef} />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn refresh={refreshAppBar} />
        </Route>
        <Route path="/signout" exact>
          <SignOut refresh={refreshAppBar} />
        </Route>
        <Route path="/me" exact>
          <AuthorizedUser />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
