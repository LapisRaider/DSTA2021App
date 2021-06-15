import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Title, TextInput } from "react-native-paper";

import ChatBox from "../Components/ChatBox";

const senderColor = "#FAC200";
const receiverColor = "#F00000";

const ChatScreen = () => {
  //0 is receiver, 1 is sender
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {messages.map((msg, index) => (
          <ChatBox
            msg={msg.message}
            colorBG={msg.senderID == 0 ? receiverColor : senderColor}
            alignment={msg.senderID == 0 ? "flex-start" : "flex-end"}
            key={index}
          />
        ))}
      </ScrollView>

      <View style={styles.textInputContainer}>
        <TextInput
          label="Message"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          onSubmitEditing={submitText}
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
    flex: 1,
    marginBottom: "20%",
  },
  textInputContainer: {
    flex: 1,
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  textInput: {
    borderColor: "Black",
  },
});

export default ChatScreen;
