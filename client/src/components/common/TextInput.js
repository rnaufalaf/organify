import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TextInput = ({ ...props }) => {
  <View style={styles.container}>
    <Input errorStyle={styles.error} {...props} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
  },
  error: {
    fontSize: wp(3.4),
    color: "red",
    paddingHorizontal: 4,
    paddingTop: 15,
  },
});

export default memo(TextInput);
