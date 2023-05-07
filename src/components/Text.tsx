import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

type Theme = typeof theme;
type Color = keyof Theme["color"];
type FontSize = keyof Theme["fontSize"];
type FontWeight = keyof Theme["fontWeight"];

type NativeTextProps = React.ComponentProps<typeof NativeText>;

type Props = {
  color?: Color;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
} & NativeTextProps;

const styles = StyleSheet.create({
  text: {
    color: theme.color.textPrimary,
    fontSize: theme.fontSize.body,
    fontFamily: theme.fontFamily.main,
    fontWeight: theme.fontWeight.normal,
  },
});

const createStyle = <T extends keyof Theme, U extends keyof Theme[T]>(
  type: T,
  value: U
) =>
  StyleSheet.create({
    [type]: theme[type][value],
  });

const Text = ({ color, fontSize, fontWeight, style, ...props }: Props) => {
  const textStyle = [
    styles.text,
    color && createStyle("color", color),
    fontSize && createStyle("fontSize", fontSize),
    fontWeight && createStyle("fontWeight", fontWeight),
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
