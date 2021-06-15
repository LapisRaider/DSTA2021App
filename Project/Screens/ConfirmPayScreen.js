import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Text, Button } from "react-native-paper";
import Header from "../Components/Header";

const { width, height } = Dimensions.get("window");

const ConfirmPayScreen = () => {
  let [buttonPicked, setButton] = useState(0);
  function change(buttonNumber) {
    setButton(buttonNumber);
  }

  const inactiveOpacity = 0.5;
  const touchOpacity = 0.7;

  return (
    <View style={styles.mainContainer}>
      <Header title="Payment" back={true} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => change(1)}
          activeOpacity={touchOpacity}
        >
          <Image
            style={[
              styles.paymentButton,
              { opacity: buttonPicked == 1 ? 1 : inactiveOpacity },
            ]}
            source={require("../assets/dbsIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => change(2)}
          activeOpacity={touchOpacity}
        >
          <Image
            style={[
              styles.paymentButton,
              { opacity: buttonPicked == 2 ? 1 : inactiveOpacity },
            ]}
            source={require("../assets/googlePay.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => change(3)}
          activeOpacity={touchOpacity}
        >
          <Image
            style={[
              styles.paymentButton,
              { opacity: buttonPicked == 3 ? 1 : inactiveOpacity },
            ]}
            source={require("../assets/payNowIcon.png")}
          />
        </TouchableOpacity>
      </View>

      <Button
        style={styles.confirmButton}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}> CONFIRM PAYMENT </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "50%",
  },
  paymentButton: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  confirmButton: {
    backgroundColor: "#FFE32C",
    borderColor: "#FFC300",
    borderWidth: 2,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: "20%",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});

export default ConfirmPayScreen;
