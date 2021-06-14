import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoBox from "../Components/InfoBox";
import ImageSlider from "../Components/ImageSlider";

/*  thing i need:
        - Able to render out a button at the bottom
        - Able to show a picture of the food (if possible can slide the pic to see more)
        - 3 categories, able to see the payment, about, collection details
        - top right got a ask question icon
*/

const GroupBuyScreen = () => {
  var tempInnerText =
    "Lorem ipsum dolor sit a This makes the content container stre sit a This makes the content container stretch to fi ut labore et dol  sit a This makes the content container stretch to fi ut labore et doltch to fi ut labore et dol  sit a This makes the content container stretch to fi ut labore et dol  sit a This makes the content container stretch to fi ut l sit a This makes the content container stretch to fi ut labore et dolabore et dol";
  var tempTitle = "Hello World!";

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageSlider />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <InfoBox title={tempTitle} innerText={tempInnerText} />
        <Button
          style={styles.orderButton}
          icon="basket"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Order now!!
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: "black",
  },
  orderButton: {
    backgroundColor: "white",
    borderColor: "#FFC300",
    borderWidth: 10,
  },
});

export default GroupBuyScreen;
