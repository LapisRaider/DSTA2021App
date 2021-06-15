import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoBox from "../Components/InfoBox";
import ImageSlider from "../Components/ImageSlider";
import Header from "../Components/Header";

/*  thing i need:
        - Able to render out a button at the bottom
        - Able to show a picture of the food (if possible can slide the pic to see more)
        - 3 categories, able to see the payment, about, collection details
        - top right got a ask question icon
*/

const GroupBuyScreen = () => {
  var tempInnerText =
    "Lorem ipsum dolor sit a This makes the content container stre sit a This makes the content container stretch to fi ut labore et dol  sit a This makes the content container stretch to fi ut labore et doltch to fi ut labore et dol  sit a This makes the content container stretch to fi ut labore et dol  sit a This makes the content container stretch to fi ut l sit a This makes the content container stretch to fi ut labore et dolabore et dol";
  var shopName = "SHOP NAME";

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={shopName} chat={true} back={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageSlider
          widthMultiplier={0.9}
          bottomMarginVal={"2%"}
          topMarginVal={"4%"}
        />
        <InfoBox title={"WHY JIO ME"} innerText={tempInnerText} />
        <InfoBox title={"JIO WHAT"} innerText={tempInnerText} />
        <InfoBox title={"JIO-M WHERE"} innerText={tempInnerText} />
        <InfoBox title={"HOW TO PAY"} innerText={tempInnerText} />
        <Button
          style={styles.orderButton}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          <Text style={styles.orderText}> ORDER NOW!!</Text>
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
    marginHorizontal: "3%",
    marginBottom: "10%",
  },
  text: {
    color: "black",
  },
  orderButton: {
    backgroundColor: "#FFE32C",
    borderColor: "#FFC300",
    borderWidth: 2,
    width: "80%",
    marginTop: "8%",
    borderRadius: 10,
  },
  orderText: {
    color: "black",
    fontSize: 18,
  },
});

export default GroupBuyScreen;
