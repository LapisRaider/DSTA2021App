import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";
import HostOrders from "../Components/HostOrders";
import BuyerOrders from "../Components/BuyerOrders";
import PastOrders from "../Components/PastOrders";
import { useSelector, useDispatch } from "react-redux";

const ProfileScreen = () => {
  let shopsData = useSelector((state) => state.shop.shops);
  if (shopsData == null || shopsData == undefined) {
    shopsData = [];
    shopsData.push({
      shopName: "-",
      description: "-",
      items: [{ id: 1, name: "", description: "", imageURL: "" }],
      collectionPoint: "",
      collectionTime: "-",
      orderFormClosing: "",
      currentMoney: 0,
      goalMoney: 0,
    });
  }

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
                  imageUri={
                    shop.items != null && shop.items.length != 0
                      ? shop.items[0].imageURL
                      : "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
                  }
                  name={shop.shopName}
                  closingDate={shop.orderFormClosing}
                  key={index}
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
                imageUri={require("../assets/kueh.jpg")}
                name="Mama's Kueh"
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
                imageUri={require("../assets/burnt-ends.jpeg")}
                name="Homemade Sugar Donuts"
              />
              <PastOrders
                imageUri={require("../assets/dough-chijmes.jpeg")}
                name="AM Artisan cookies"
              />
              <PastOrders
                imageUri={require("../assets/whisking-bakes.jpeg")}
                name="Japanese bakes"
              />
              <PastOrders
                imageUri={require("../assets/youkneadcake.jpeg")}
                name="Homemade Cakes"
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
