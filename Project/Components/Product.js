import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title, List } from "react-native-paper";

export default function Product({ title, description, price }) {
  const [Quantity, setQuantity] = useState("Quantity");
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>
        {" "}
        {title} - $ {price}
      </Text>
      <Text style={styles.textStyle}> {description} </Text>
      <List.Accordion
        style={styles.accordionStyle}
        title={Quantity}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
      >
        <List.Item
          style={styles.listItemStyle}
          title="1"
          onPress={() => {
            setQuantity("1");
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="2"
          onPress={() => {
            setQuantity("2");
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="3"
          onPress={() => {
            setQuantity("3");
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="4"
          onPress={() => {
            setQuantity("4");
            setExpanded(!expanded);
          }}
        />
        <List.Item
          style={styles.listItemStyle}
          title="5"
          onPress={() => {
            setQuantity("5");
            setExpanded(!expanded);
          }}
        />
      </List.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFC300",
    width: "80%",
    borderRadius: 10,
    padding: "3%",
    margin: "1%",
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
  },
  listItemStyle: {
    height: 30,
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "grey",
    backgroundColor: "white",
  },
});
