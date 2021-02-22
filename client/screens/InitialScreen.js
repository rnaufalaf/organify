import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button, Header } from "react-native-elements";

function InitialScreen(props) {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{ backgroundColor: "green" }}
        centerComponent={{
          text: "Organify",
          style: { color: "white", fontSize: 20 },
        }}
      />
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Organify.png")} />
      </View>
      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 40, color: "green" }}>Organify</Text>
        <Text style={{ fontSize: 20, color: "green" }}>
          Organic lifestyle at your fingertips
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          title="Login"
          onPress={() => props.navigation.navigate("Login")}
        />
        <Button
          buttonStyle={styles.button}
          title="Sign Up"
          onPress={() => props.navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
}

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: "green",
  },
});
