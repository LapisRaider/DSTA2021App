import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title, List } from "react-native-paper";

export default function Product({ title, description, price }) {
  return (
    <View style={styles.mainContainer}>
      <Title style={styles.titleStyle}>
        {" "}
        {title} - $ {price}
      </Title>
      <Text> {description} </Text>
      <List.Accordion style={styles.accordionStyle} title="Quantity">
        <List.Item style={styles.listItemStyle} title="1" />
        <List.Item style={styles.listItemStyle} title="2" />
        <List.Item style={styles.listItemStyle} title="3" />
        <List.Item style={styles.listItemStyle} title="4" />
        <List.Item style={styles.listItemStyle} title="5" />
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
