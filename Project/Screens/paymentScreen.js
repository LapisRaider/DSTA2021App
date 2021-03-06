import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../Components/Product";
import Header from "../Components/Header";

const DATA = [
  { title: "meep", price: 3, id: "0" },
  { title: "meep", price: 3, id: "1" },
];

export default function paymentScreen({ navigation, route }) {
  const [totalPrice, setTotalPrice] = useState(0);

  var items = route.params.itemData;
  var products = [];
  console.log(items);

  /* const [products, setProducts] = useState([
    { title: "Orh Nee Tart Balls", price: 14, id: "0" },
    { title: "380g Yam Jam", price: 22, id: "1" },
    { title: "5’’ Basque Burnt Cheesecake", price: 22, id: "2" },
  ]); */

  for (var i = 0; i < items.length; ++i) {
    let itemPrice = items[i].desc;
    if (isNaN(itemPrice)) {
      itemPrice = 0;
    }

    products.push(...products, {
      title: items[i].name,
      price: parseInt(itemPrice),
      id: i,
    });
  }

  const calculatePriceHandler = (newPrice) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(newPrice));
  };

  function renderProduct({ item }) {
    return <Product {...item} calculatePrice={calculatePriceHandler} />;
  }

  function addProduct() {
    setProducts([
      ...products,
      {
        title: "meep",
        price: 3,
        id: products.length,
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="WHISKING BAKES" chat={false} back={true} />

      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={renderProduct}
      />

      <View style={styles.amountStyle}>
        <Text>{`Total amount: $${totalPrice}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => navigation.navigate("ConfirmPay")}
      >
        <Text style={styles.paymentText}> Payment </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  amountStyle: {
    height: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#FFC300",
    borderWidth: 1,
    borderRadius: 5,
    width: "60%",
  },
  paymentButton: {
    borderColor: "#FFC300",
    borderWidth: 1,
    backgroundColor: "#FFC300",
    borderRadius: 5,
    width: "60%",
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
  },
  paymentText: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});
