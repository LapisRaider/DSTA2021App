import React from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ImageSlider = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        pagingEnabled
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={width}
        snapToAlignment={"center"}
      >
        {images.map((image, index) => (
          <Image
            style={styles.imageContainer}
            source={{ uri: image }}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    width: width,
  },
  imageContainer: {
    width: width,
    height: height * 0.3,
  },
});

export default ImageSlider;
