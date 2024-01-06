import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/FontAwesome";
const Review = () => {
  return (
    <>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={[styles.container, { paddingVertical: 10 }]}>
          <View style={styles.container}>
            <Image source={require("../assets/1.jpg")} style={styles.image} />

            <View>
              <Text
                style={{ color: "#000", fontSize: hp("2%"), fontWeight: 700 }}
              >
                Jhon
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 8,
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  name="star"
                  style={{ marginRight: 5 }}
                  size={15}
                  color="#FFB316"
                />
                <Icon
                  name="star"
                  style={{ marginRight: 5 }}
                  size={15}
                  color="#FFB316"
                />
                <Icon
                  name="star"
                  style={{ marginRight: 5 }}
                  size={15}
                  color="#FFB316"
                />
                <Icon
                  name="star"
                  style={{ marginRight: 5 }}
                  size={15}
                  color="#FFB316"
                />
                <Icon
                  name="star-o"
                  style={{ marginRight: 5 }}
                  size={15}
                  color="#eee"
                />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{ color: "#000", fontSize: hp("2%"), fontWeight: 400 }}
            >
              12 Apr
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            odio animi corporis numquam qui delectus at nisi. Expedita
            voluptates error, iusto blanditiis reprehenderit vero maiores ipsum.
            Eum amet tempore perferendis?
          </Text>
        </View>
      </View>
    </>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
});
