import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { Text } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const ImageSlider = ({
  widthMultiplier,
  bottomMarginVal,
  topMarginVal,
  imagesURL,
}) => {
  //in case if empty, just a precaution
  if (imagesURL == null) {
    imagesURL = [];
    imagesURL.push(
      "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
    );
  }

  let [slideState, setSlideState] = useState(0);

  function change({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== slideState) {
      setSlideState(slide);
    }
  }

  return (
    <View
      style={[
        styles.mainContainer,
        { marginBottom: bottomMarginVal, marginTop: topMarginVal },
      ]}
    >
      <ScrollView
        pagingEnabled
        horizontal
        style={[styles.scrollContainer, { width: width * widthMultiplier }]}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={width * widthMultiplier}
        snapToAlignment={"center"}
        onScroll={change}
        scrollEventThrottle={16}
      >
        {imagesURL.map((imagelink, index) => (
          <Image
            style={[styles.imageContainer, { width: width * widthMultiplier }]}
            source={{ uri: imagelink }}
            key={index}
          />
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {imagesURL.map((i, k) => (
          <Text
            key={k}
            style={k == slideState ? styles.activeDots : styles.dots}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.3,
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dots: {
    color: "grey",
    margin: 3,
    fontSize: 10,
  },
  activeDots: {
    color: "white",
    margin: 3,
    fontSize: 10,
  },
});

export default ImageSlider;
