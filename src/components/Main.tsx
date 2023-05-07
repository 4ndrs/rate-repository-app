import { StyleSheet, View } from "react-native";

import RepositoryList from "./RepositoryList";
import Constants from "expo-constants";
import AppBar from "./AppBar";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    felxGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.color.lightBg,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
