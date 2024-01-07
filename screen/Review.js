import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Icon from "react-native-vector-icons/FontAwesome";
const Review = (props) => {
  return (
    <>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={[styles.container, { paddingVertical: 10 }]}>
          <View style={styles.container}>
            <Image source={props.data.img} style={styles.image} />

            <View>
              <Text
                style={{ color: "#000", fontSize: hp("2%"), fontWeight: 700 }}
              >
                {props.data.name}
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
              {props.data.date}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "justify" }}>{props.data.text}</Text>
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
