import React, { useState, useContext, memo } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ListItem, Icon, Button, Header } from "react-native-elements";
import { useMutation } from "@apollo/react-hooks";

import Logo from "../components/common/Logo";
import { AuthContext } from "../context/auth";
import { LOGIN_USER } from "../util/graphql";

const LoginScreen = ({ navigation }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (key, val) => {
    setValues({ ...values, [key]: val });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      // context.login(result.data.login);
      console.log(result);
    },
    onError(err) {
      console.log("Error");
      console.log("ini error", err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ backgroundColor: "green" }}
        centerComponent={{
          text: "Login",
          style: { color: "white", fontSize: 20 },
        }}
      />

      <KeyboardAvoidingView
        contentContainerStyle={styles.container}
        behavior="padding"
        enabled
      >
        <Logo />
        <Text style={styles.logintext}>Login</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"grey"}
            value={values.email}
            error={errors.email ? true : false}
            onChangeText={(val) => onChange("email", val)}
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={"grey"}
            value={values.password}
            error={errors.password ? true : false}
            onChangeText={(val) => onChange("password", val)}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <Button
            onPress={onSubmit}
            loading={loading ? true : false}
            title="Login"
            buttonStyle={{ height: 50, width: 100, backgroundColor: "green" }}
          />
        </View>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Text style={{ fontWeight: "bold", color: "green" }}>
            Don't have an account? Register here !
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  imgcontainer: {
    height: 200,
    width: 200,
    flexGrow: 1,
  },
  logintext: {
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
    justifyContent: "space-evenly",
  },
  buttoncontainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    marginTop: 20,
  },
});
export default LoginScreen;
