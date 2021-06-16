import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";
import HostOrders from "../Components/HostOrders";
import BuyerOrders from "../Components/BuyerOrders";
import PastOrders from "../Components/PastOrders";
import { useSelector, useDispatch } from "react-redux";

const ProfileScreen = () => {
  const shopsData = useSelector((state) => state.shop.shops);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="MY JIOs" />
      <ScrollView scrollEventThrottle={10}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingTop: 20,
            marginHorizontal: 30,
          }}
        >
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={styles.jioHeader}> JIO-ing</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {shopsData.map((shop, index) => (
                <HostOrders
                  imageUri={shop.items[0].imageURL}
                  name={shop.shopName}
                  closingDate={shop.orderFormClosing}
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.jioHeader}> JIO-coming </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <BuyerOrders
                imageUri={require("../Images/rabbit-meat.jpeg")}
                name="Rabbit Meat2"
              />
              <BuyerOrders
                imageUri={require("../Images/burnt-ends.jpeg")}
                name="Burnt Ends Bakery2"
              />
              <BuyerOrders
                imageUri={require("../Images/whisking-bakes.jpg")}
                name="Whisking Bakes2"
              />
            </ScrollView>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.jioHeader}> JIO-ed </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <PastOrders
                imageUri={require("../Images/rabbit-meat.jpeg")}
                name="Rabbit Meat3"
              />
              <PastOrders
                imageUri={require("../Images/burnt-ends.jpeg")}
                name="Burnt Ends Bakery3"
              />
              <PastOrders
                imageUri={require("../Images/whisking-bakes.jpg")}
                name="Whisking Bakes3"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  jioHeader: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
});

export default ProfileScreen;
