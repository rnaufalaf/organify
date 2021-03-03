import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Logo = () => (
  <Image source={require("../../assets/Organify.png")} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: wp(100),
    marginBottom: 12,
  },
});

export default memo(Logo);
