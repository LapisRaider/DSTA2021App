import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, List } from "react-native-paper";

export default function Product({ title, price, calculatePrice }) {
  const [Quantity, setQuantity] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [oldPrice, setOldPrice] = useState(0);
  useEffect(() => {
    // over here
    calculatePrice(Quantity * price - oldPrice);
    setOldPrice(Quantity * price);
  }, [Quantity]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>
        {" "}
        {title} - $ {price}
      </Text>
      <List.Accordion
        style={styles.accordionStyle}
        title={Quantity === 0 ? "Quantity" : Quantity}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        right={(props) => <List.Icon {...props} icon="menu-down" />}
      >
        <List.Item
          style={styles.listItemStyle}
          title="0"
          onPress={() => {
            setQuantity(0);
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="1"
          onPress={() => {
            setQuantity(1);
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="2"
          onPress={() => {
            setQuantity(2);
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="3"
          onPress={() => {
            setQuantity(3);
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="4"
          onPress={() => {
            setQuantity(4);
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="5"
          onPress={() => {
            setQuantity(5);
            setExpanded(!expanded);
          }}
        />
      </List.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    borderColor: "#FFC300",
    borderWidth: 1,
    padding: "3%",
    margin: "3%",
    alignSelf: "center",
  },
  titleStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 12,
  },
  accordionStyle: {
    height: 30,
    justifyContent: "center",
    textAlign: "right",
    borderColor: "black",
    borderWidth: 1,
  },
  listItemStyle: {
    height: 30,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,
    backgroundColor: "white",
  },
});
