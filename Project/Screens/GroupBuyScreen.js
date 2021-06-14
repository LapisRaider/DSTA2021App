import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoBox from "../Components/InfoBox";

/*  thing i need:
        - Able to render out a button at the bottom
        - Able to show a picture of the food (if possible can slide the pic to see more)
        - 3 categories, able to see the payment, about, collection details
        - top right got a ask question icon
*/
const GroupBuyScreen = () => {
  var tempInnerText =
    "Lorem ipsum dolor sit a This makes the content container stretch to fi ut labore et dol";
  var tempTitle = "Hello World!";

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});

export default GroupBuyScreen;
