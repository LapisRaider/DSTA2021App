import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

/*
    Should show a title, and information that I can just insert in
*/
const InfoBox = ({ title, innerText }) => {
  console.log(title);
  return (
    <View style={styles.mainContainer}>
      <Title style={styles.titleStyle}>{title}</Title>
      <Text style={styles.innerText}>{innerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFC300",
    width: "90%",
    borderRadius: 15,
    padding: "3%",
    margin: "1%",
  },
  titleStyle: {
    color: "black",
    fontWeight: "bold",
  },
  innerText: {
    color: "black",
  },
});

export default InfoBox;
