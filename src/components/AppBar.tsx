import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.background,
  },

  pressable: {
    padding: 20,
  },

  signIn: {
    marginLeft: "auto",
    marginRight: 0,
  },
});

const AppBar = () => (
  <View style={styles.container}>
    <Link to="/" style={[styles.pressable]}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        Repositories
      </Text>
    </Link>
    <Link to="/sign-in" style={[styles.pressable, styles.signIn]}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        Sign in
      </Text>
    </Link>
  </View>
);

export default AppBar;
