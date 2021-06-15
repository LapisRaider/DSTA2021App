import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../Components/Product";
import Header from "../Components/Header";

const DATA = [
  { title: "meep", description: "meeep", price: 3, id: "0" },
  { title: "meep", description: "meeep", price: 3, id: "0" },
];

export default function paymentScreen() {
  const [products, setProducts] = useState([
    { title: "meep", description: "meeep", price: 3, id: "0" },
    { title: "meep", description: "meeep", price: 3, id: "0" },
  ]);

  function renderProduct({ item }) {
    return (
      <Product
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="WHISKING BAKES" chat={false} back={true} />
      <Product
        title="Orh Nee Tart Balls"
        description="Whisking Bakes is the creator of the world's first Orh Nee Tarts. Inspired by the traditional Teochew dessert, Orh Nee, this buttery unique dessert gained the love of many customers.
Storage: Keep in room temperature for up to 5 days, or in the fridge for up to 7 days..
"
        price={14}
      />
      <Product
        title="380g Yam Jam"
        description="Introducing Whisking Bakes’ newest YAM JAM! Just like nut butters and kaya, our yam jam is fragrant and creamy. There are so many ways to enjoy our Yam Jam! 
Storage: Store in the fridge for up to 7 days.
"
        price={22}
      />
      <Product
        title="5’’ Basque Burnt Cheesecake"
        description="The taro BBC is for all you taro lovers out there. Creamy taro filling sandwiched between rich decadent cheesecake, with charred caramelised top and sides. Just perfect!
Storage: Store in the fridge for up to 7 days.
"
        price={22}
      />

      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={renderProduct}
      />
      <View style={styles.amountStyle}>
        <Text> Total amount: $ </Text>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
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
    backgroundColor: "#FFC300",
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
