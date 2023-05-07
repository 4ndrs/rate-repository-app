import { Pressable, StyleSheet, View } from "react-native";

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
    <Pressable style={styles.pressable}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        Repositories
      </Text>
    </Pressable>
  </View>
);

export default AppBar;
