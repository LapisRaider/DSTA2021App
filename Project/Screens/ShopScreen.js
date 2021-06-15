import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShopCard from '../Components/ShopCard.js';

const ShopScreen = () => {
  const [cards, setCards] = useState([]);

  function addCard() {
    setCards([
        {
          title: "Rabbit Meat",
          collectionTime: "2021-10-14, 1600hrs",
          collectionPoint: "Blk 851 Hougang Central, #13-24",
          currentMoney: 105,
          goalMoney: 300,
        },
        ...cards,
    ]);
  };

  function renderCard({item}) {
    return (
      <TouchableOpacity>
        <ShopCard title={item.title}
          collectionTime={item.collectionTime}
          collectionPoint={item.collectionPoint}
          currentMoney={item.currentMoney}
          goalMoney={item.goalMoney} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <Searchbar style={styles.searchbar} placeholder="Search"/>
          <Button style={styles.addButton} onPress={addCard} icon="plus-box" fontSize={50} color="#ffffff" mode="outlined" />
        </View>
        <FlatList style={styles.flatList} data={cards} renderItem={renderCard}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffc300",
    padding: 8,
  },
  searchbar: {
    flex: 1,
    height: "80%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: "100%",
    flex: 1,
  }
});

export default ShopScreen;