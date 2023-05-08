import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import Constants from "expo-constants";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.color.background,
  },
  pressable: {
    padding: 20,
  },
});

const AppBar = () => (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Link to="/" style={[styles.pressable]}>
        <Text fontWeight="bold" fontSize="subheading" color="textWhite">
          Repositories
        </Text>
      </Link>
      <Link to="/sign-in" style={styles.pressable}>
        <Text fontWeight="bold" fontSize="subheading" color="textWhite">
          Sign in
        </Text>
      </Link>
    </ScrollView>
  </View>
);

export default AppBar;
