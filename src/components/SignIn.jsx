import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "white",
  },
  formInputItem: {
    height: 50,
    fontSize: 20,
    lineHeight: 25,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  formButtonItemView: {
    borderRadius: 14,
    backgroundColor: "blue",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  formButtonItem: {
    height: 50,
    color: "white",
    textAlign: "center",
    fontSize: 25,
    lineHeight: 50,
    fontWeight: "700",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be longer than 1")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be longer than 4")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.formInputItem}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.formInputItem}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit}>
        <View style={styles.formButtonItemView}>
          <Text style={styles.formButtonItem}>Sign in</Text>
        </View>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
