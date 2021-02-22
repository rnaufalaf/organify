import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Header } from "react-native-elements";
import { Formik } from "formik";

import { useForm } from "../util/hooks.js";

function LoginScreen(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (nativeEvent) => {
    setValues({ ...values, [nativeEvent.target.text]: nativeEvent.text });
    console.log(nativeEvent);
  };

  const onSubmit = (nativeEvent) => {
    // event.preventDefault();
    console.log("email", values.email);
    console.log("password", values.password);
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        containerStyle={{ backgroundColor: "green" }}
        centerComponent={{
          text: "Login",
          style: { color: "white", fontSize: 20 },
        }}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          props.navigation.navigate("Home");
        }}
      >
        {(props) => (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.logintext}>Login</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder={"Email"}
                placeholderTextColor={"grey"}
                onChangeText={(text) => setValues()}
                value={values.email}
              />
              <TextInput
                style={styles.input}
                placeholder={"Password"}
                placeholderTextColor={"grey"}
                onChangeText={(text) => setValues()}
                value={values.password}
              />
            </View>
            <View style={styles.buttoncontainer}>
              <Button
                onPress={onSubmit}
                title="Login"
                buttonStyle={{
                  height: 50,
                  width: 100,
                  backgroundColor: "green",
                }}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
}

const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
  },
  logintext: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 30,
    fontWeight: "500",
    textAlign: "left",
  },
  input: {
    marginTop: 20,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
  },
  buttoncontainer: {
    flexGrow: 1,
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 20,
  },
});
export default LoginScreen;
