import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title, List } from "react-native-paper";

export default function Product({ title, price }) {
  const [Quantity, setQuantity] = useState("Quantity");
  const [expanded, setExpanded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>
        {" "}
        {title} - $ {price}
      </Text>
      <List.Accordion
        style={styles.accordionStyle}
        title={Quantity}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        <List.Item
          style={styles.listItemStyle}
          title="0"
          onPress={() => {
            setQuantity("0");
            setExpanded(!expanded);
            setTotalPrice({ price } * 0);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="1"
          onPress={() => {
            setQuantity("1");
            setExpanded(!expanded);
            setTotalPrice({ price } * 1);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="2"
          onPress={() => {
            setQuantity("2");
            setExpanded(!expanded);
            setTotalPrice({ price } * 2);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="3"
          onPress={() => {
            setQuantity("3");
            setExpanded(!expanded);
            setTotalPrice({ price } * 3);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="4"
          onPress={() => {
            setQuantity("4");
            setExpanded(!expanded);
            setTotalPrice({ price } * 4);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="5"
          onPress={() => {
            setQuantity("5");
            setExpanded(!expanded);
            setTotalPrice({ price } * 5);
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
