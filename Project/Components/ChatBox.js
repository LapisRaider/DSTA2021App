import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const ChatBox = ({ msg, colorBG, alignment }) => {
  return (
    <View
      style={[
        styles.chatContainer,
        { borderColor: colorBG, alignSelf: alignment },
      ]}
    >
      <Text style={styles.chatText}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    alignSelf: "flex-start",
    maxWidth: "55%",
    minWidth: "10%",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  chatText: {
    color: "#000000",
    padding: 10,
  },
});

export default ChatBox;
