import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoBox from "../Components/InfoBox";
import ImageSlider from "../Components/ImageSlider";
import Header from "../Components/Header";

const GroupBuyScreen = ({ navigation, route }) => {
  var shopData = route.params.shopData;
  var items = route.params.shopData.items;
  var imageLinks = [];
  var itemDescription = [];

  for (var i = 0; i < items.length; ++i) {
    if (items[i].imageURL != undefined) {
      imageLinks.push(items[i].imageURL);
    } else {
      imageLinks.push(
        "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
      );
    }
    itemDescription.push(items[i].name + " - $" + items[i].desc + " " + "\n");
  }

  var howToPayText =
    "Paynow / Paylah / Google Pay \n All product prices listed in Singapore Dollars (SGD)";

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title={shopData.shopName}
        chat={true}
        back={true}
        func={() => navigation.navigate("Chat")}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageSlider
          widthMultiplier={0.9}
          bottomMarginVal={"2%"}
          topMarginVal={"4%"}
          imagesURL={imageLinks}
        />
        <InfoBox title={"WHY JIO ME"} innerText={shopData.description} />
        <InfoBox title={"JIO WHAT"} innerText={itemDescription} />
        <InfoBox title={"JIO-M WHERE"} innerText={shopData.collectionPoint} />
        <InfoBox title={"HOW TO PAY"} innerText={howToPayText} />
        <Button
          style={styles.orderButton}
          mode="contained"
          onPress={() => navigation.navigate("Payment", { itemData: items })}
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
    marginBottom: 20,
  },
  orderText: {
    color: "black",
    fontSize: 18,
  },
});

export default GroupBuyScreen;
