import React, { useState } from "react";
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
import Profile from "./Profile";
import Store from "./Store";

const Home = () => {
  const [tab, setTab] = useState("review");

  const changeTab = (selectedTab) => {
    setTab(selectedTab);
  };

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
        <TouchableOpacity onPress={() => changeTab("profile")}>
          <Text style={[styles.tabText, tab === "profile" && styles.activeTab]}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTab("store")}>
          <Text style={[styles.tabText, tab === "store" && styles.activeTab]}>
            Store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTab("review")}>
          <Text style={[styles.tabText, tab === "review" && styles.activeTab]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabIndicator}>
        <View
          style={[
            styles.indicatorLine,
            {
              left:
                tab === "profile" ? 0 : tab === "store" ? wp("33%") : wp("66%"),
            },
          ]}
        />
      </View>

      {tab === "profile" && <Profile />}
      {tab === "store" && <Store />}
      {tab === "review" && (
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
            <Text
              style={{ color: "#000", fontWeight: "700", fontSize: hp(2.5) }}
            >
              Reviews
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#F03950", fontWeight: "700" }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabText: {
    color: "#000",
    fontWeight: 900,
    fontSize: hp(2),
  },
  activeTab: {
    color: "#F03950",
  },
  tabIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  indicatorLine: {
    height: 2,
    width: wp("30%"),
    backgroundColor: "#F03950",
    position: "absolute",
    bottom: 0,
  },
});

export default Home;
