import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Header from "../Components/Header";

import ChatBox from "../Components/ChatBox";

const senderColor = "#FFD52C";
const receiverColor = "#FF9D2C";

const ChatScreen = () => {
  //0 is receiver, 1 is sender
  const tabBarHeight = useBottomTabBarHeight();
  const nameOfShop = "hello";

  const defaultMsg = [
    {
      senderID: "0",
      message:
        "Hello how can I assist you? Please leave a message and I'll get back to you.",
    },
    {
      senderID: "1",
      message: "Hello I would like to enquire about this product?",
    },
    {
      senderID: "0",
      message: "Sure! What would you like to know?",
    },
  ];

  const [messages, setMessages] = useState([...defaultMsg]);

  const [text, setText] = useState("");

  function submitText() {
    setMessages([...messages, { senderID: "1", message: text }]);
    setText("");
  }

  return (
    <View style={styles.mainContainer}>
      <Header title={nameOfShop} back={true} />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { marginBottom: tabBarHeight + 50 },
        ]}
      >
        {messages.map((msg, index) => (
          <ChatBox
            msg={msg.message}
            colorBG={msg.senderID == 0 ? receiverColor : senderColor}
            alignment={msg.senderID == 0 ? "flex-start" : "flex-end"}
            key={index}
          />
        ))}
      </ScrollView>

      <View style={[styles.textInputContainer, { bottom: tabBarHeight }]}>
        <TextInput
          label="Message"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          onSubmitEditing={submitText}
          right={<TextInput.Icon onPress={submitText} name="send" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  textInputContainer: {
    flex: 1,
    position: "fixed",
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderColor: "Black",
    alignSelf: "flex-start",
  },
});

export default ChatScreen;
