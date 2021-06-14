import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../Components/Product";

export default function paymentScreen() {
  const [products, setProducts] = useState([]);

  function addProduct({ product }) {
    return (
      <Product
        title={product.title}
        description={product.description}
        price={product.price}
      />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Product title="meep" description="meep" price={3} />

      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={addProduct}
      />
      <View style={styles.amountStyle}>
        <Text> Total amount: $ </Text>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentText}> Payment </Text>
      </TouchableOpacity>
    </View>
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
    color: "#FFC300",
    width: "60%",
  },
  paymentButton: {
    borderColor: "#FFC300",
    borderWidth: 1,
    backgroundColor: "white",
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
