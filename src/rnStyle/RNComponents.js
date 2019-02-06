import React from "react";
import { View, Text, TouchableOpacity, NetInfo, StyleSheet } from "react-native";
import { sr, centering, srInt } from "./StyleUtils";

const styl = StyleSheet.create({
  bttnContainer: {
    alignSelf: "stretch",
    ...centering
  },
  centerTxt: {
    textAlign: "center"
  }
});

export function ButtonCenter(props) {
  const { able = true, action, bttnStyle, style } = props;
  return (
    <TouchableOpacity
      disabled={!able}
      style={[{alignSelf: "stretch", ...centering, ...bttnStyle }, style]}
      onPress={action}
    >
      {props.children}
    </TouchableOpacity>
  );
}

export function ViewCenter(props) {
  return <View style={{ ...props.style, ...centering }}>{props.children}</View>;
}

export function TextCenter(props) {
  const { style, color, fontSize } = props;

  return (
    <Text style={[style, styl.centerTxt, { color, fontSize: fontSize * sr }]}>
      {props.children}
    </Text>
  );
}

export function TextNorm(props) {
  const {
    color,
    fontSize,
    bottomLineColor = null,
    marginLeft = 0,
    children,
    height,
    width
  } = props;
  return (
    <View
      style={{
        height: height * sr,
        width: width ? width * sr : "100%",
        justifyContent: "center",
        marginLeft: marginLeft * sr,
        borderBottomWidth: bottomLineColor ? 1 : 0,
        borderColor: bottomLineColor
      }}
    >
      <Text style={{ color, fontSize: fontSize * sr, textAlign: "left" }}>
        {children}
      </Text>
    </View>
  );
}

export function ButtonSimple(props) {
  const { onPress, backgroundColor = "#FFF",
    color, fontSize, children, height,
    width } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        height: srInt(height * sr),
        width: width ? srInt(width * sr) : "100%",
        ...centering
      }}
      onPress={onPress}
    >
      <Text style={{ color, fontSize: fontSize * sr, textAlign: "center" }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
