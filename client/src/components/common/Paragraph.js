import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: wp(3.89),
    lineHeight: 26,
    color: "black",
    textAlign: "center",
    marginBottom: 14,
  },
});

export default memo(Paragraph);
