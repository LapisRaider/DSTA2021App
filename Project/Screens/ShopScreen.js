import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShopCard from '../Components/ShopCard.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShopScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  function addCard() {
    setCards([
      {
        shopName: 'Rabbit Meat',
        imageURL:
          'https://assets2.rappler.com/2021/02/rabbit-meat-1280-1613641254701-546.jpg',
        imageLocal: require('../Images/rabbit-meat.jpeg'),
        collectionTime: '2021-10-14, 1600hrs',
        collectionPoint: 'Blk 851 Hougang Central, #13-24',
        currentMoney: 105,
        goalMoney: 300,
        index: cards.length
      },
      ...cards
    ]);
  }

  const navigateOpenJio = () => {
    addCard();

    navigation.navigate('ShopForm');
  };

  useEffect(() => {
    searchFilter(search);
  }, [cards]);

  const searchFilter = text => {
    if (text) {
      const newData = cards.filter(item => {
        const textData = text.toUpperCase();
        const itemShopName = item.shopName
          ? item.shopName.toUpperCase()
          : ''.toUpperCase();
        const itemCollectionTime = item.collectionTime
          ? item.collectionTime.toUpperCase()
          : ''.toUpperCase();
        const itemCollectionPoint = item.collectionPoint
          ? item.collectionPoint.toUpperCase()
          : ''.toUpperCase();
        return (
          itemShopName.indexOf(textData) > -1 ||
          itemCollectionTime.indexOf(textData) > -1 ||
          itemCollectionPoint.indexOf(textData) > -1
        );
      });
      setFilteredCards(newData);
      setSearch(text);
    } else {
      setFilteredCards(cards);
      setSearch(text);
    }
  };

  const navigateGroupBuy = () => {
    navigation.navigate('GroupBuy');
  };

  function renderCard({ item }) {
    return (
      <TouchableOpacity onPress={navigateGroupBuy}>
        <ShopCard
          shopName={item.shopName}
          imageURL={item.imageURL}
          imageLocal={item.imageLocal}
          collectionTime={item.collectionTime}
          collectionPoint={item.collectionPoint}
          currentMoney={item.currentMoney}
          goalMoney={item.goalMoney}
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Searchbar
          style={styles.searchbar}
          placeholder="I'm looking for..."
          value={search}
          onChangeText={text => searchFilter(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={navigateOpenJio}>
          <MaterialCommunityIcons size={40} name='plus-box' color='black' />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={filteredCards}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc300',
    padding: 8
  },
  searchbar: {
    flex: 0.9,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%',
    flex: 1
  }
});

export default ShopScreen;
