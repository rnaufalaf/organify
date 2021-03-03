import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate("Authorization");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Organify.png")}
        ></Image>
        <Text style={styles.h1}>Organify</Text>
        <Text style={styles.h2}>Organic Lifestyle at Your Fingertips</Text>
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    color: "green",
    fontSize: 50,
  },
  h2: {
    fontSize: 20,
    marginTop: 8,
  },
  logo: {
    height: 400,
    width: 350,
    justifyContent: "center",
  },
});
