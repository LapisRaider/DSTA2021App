import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function HostOrders({ imageUri, name, closingDate }) {
  var imageURL = imageUri;
  if (imageURL == null) {
    imageURL =
      "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png";
  }

  return (
    <View
      style={{
        height: 150,
        width: 200,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: "#FF9D2C",
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: imageURL }}
          style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
        <Text>Jio-end: {closingDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
