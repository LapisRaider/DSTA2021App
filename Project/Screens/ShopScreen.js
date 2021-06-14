import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShopCard from '../Components/ShopCard.js';

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <ShopCard
          title="Rabbit Meat"
          collectionTime="2021-10-14, 1600hrs"
          collectionPoint="Blk 851 Hougang Central, #13-24"
          currentMoney={450.0}
          goalMoney={500.0}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ShopScreen;
