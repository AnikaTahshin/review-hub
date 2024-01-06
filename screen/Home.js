import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome"; // Update to FontAwesome5 or appropriate version
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Review from "./Review";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <StatusBar style="auto" />
      <TouchableOpacity style={{ padding: 10, marginRight: 280 }}>
        <AntIcon name="arrowleft" size={25} />
      </TouchableOpacity>
      <View style={[styles.container, { padding: 10 }]}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#0069F3",
              padding: 20,
              borderRadius: 50,
              alignSelf: "center",
              marginRight: 10,
            }}
          >
            <Icon name="user" size={25} color="white" />
          </View>
          <View>
            <Text
              style={{ color: "#000", fontSize: hp("5%"), fontWeight: 700 }}
            >
              John
            </Text>
            <Text style={{ fontSize: hp("2%") }}>Joined Oct 2022</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#F03950",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "#fff", fontSize: hp("2%"), fontWeight: 700 }}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "#000", fontWeight: 900, fontSize: hp(2) }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#000", fontWeight: 900, fontSize: hp(2) }}>
            Store
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: "#000", fontWeight: 900, fontSize: hp(2) }}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ marginBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "#000", fontWeight: "700", fontSize: hp(2.5) }}>
            Reviews
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#F03950", fontWeight: "700" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
