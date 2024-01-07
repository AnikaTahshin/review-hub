import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
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

import Profile from "./Profile";
import Store from "./Store";

const Home = () => {
  const dataArr = [
    {
      id: 1,
      name: "Darrell Steward",
      img: require("../assets/1.jpg"),
      date: "12 Apr",
      text: "I could not be happier with my results. I have gotten both my lips and done at Pura Vida and this is the best they’ve looked in the 10+ years of me getting filler. I’ve had a great experience with Pura Vida and have gotten honest answers to all my questions.",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      img: require("../assets/2.jpg"),
      date: "21 May",
      text: "Quick service & very trustworthy. Worked with Tom Nolan on a quick fix on my mirror. He was very knowledgeable about potential issues before getting into it & was able to get it fixed very quickly. I would trust them with any future repairs, I would not take my car anywhere else.”",
    },
    {
      id: 3,
      name: "John Doe",
      img: require("../assets/3.jpeg"),
      date: "13 May",
      text: "Took care of my insurance needs. Looked for the best rates. Best insurance agent by far. Honest and trustworthy. Thank you Gil. We appreciate your hard work! Highly recommend!”",
    },
    {
      id: 4,
      name: "Robert Bros",
      img: require("../assets/4.jpeg"),
      date: "11 May",
      text: "Amazing car buying experience! Shopped around 3 different dealers and Power Ford had by far the most friendly staff and comfortable show room. The sales team was fantastic as well as the finance manager. From start to finish everything was beyond expectation.",
    },
    {
      id: 5,
      name: "Alexa D",
      img: require("../assets/5.jpeg"),
      date: "5 May",
      text: "This place is great! They have a huge selection of all kinds of instruments, a beautiful show room, and the most friendly staff I’ve encountered in a long time. I got a better deal than I was in expecting on an electric piano. I’ll definitely be back!",
    },
  ];
  const [tab, setTab] = useState("review");
  const [data, setData] = useState(dataArr);

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

      {/* Tab text */}

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

      {/* Active tab indicator */}

      <View style={styles.tabIndicator}>
        <View
          style={[
            styles.indicatorLine,
            {
              left:
                tab === "profile" ? 0 : tab === "store" ? wp("35%") : wp("65%"),
            },
          ]}
        />
      </View>

      {tab === "profile" && <Profile />}
      {tab === "store" && <Store />}
      {tab === "review" && (
        <>
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

          {/* All Data render */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <View style={{ flex: 1, padding: 10 }}>
                  <View style={[styles.container, { paddingVertical: 10 }]}>
                    <View style={styles.container}>
                      <Image source={item.img} style={styles.image} />

                      <View>
                        <Text
                          style={{
                            color: "#000",
                            fontSize: hp("2%"),
                            fontWeight: 700,
                          }}
                        >
                          {item.name}
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
                        style={{
                          color: "#000",
                          fontSize: hp("2%"),
                          fontWeight: 400,
                          marginRight: 15,
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ textAlign: "justify", lineHeight: 20 }}>
                      {item.text}
                    </Text>
                  </View>
                </View>
              </>
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
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
    textAlign: "center",
  },
  activeTab: {
    color: "#F03950",
  },
  tabIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#eee",
    height: hp(1.2),
    width: wp("100%"),
    marginLeft: -10,
  },
  indicatorLine: {
    height: hp(1.2),
    width: wp("35%"),
    backgroundColor: "#F03950",
    position: "absolute",
    bottom: 0,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
});

export default Home;
