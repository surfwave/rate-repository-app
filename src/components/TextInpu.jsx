import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    errorBorder: {
        borderWidth: 2,
        borderColor: "#d73a4a",
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  return <NativeTextInput style={error ? [textInputStyle, styles.errorBorder] : textInputStyle} {...props} />;
};

export default TextInput;
