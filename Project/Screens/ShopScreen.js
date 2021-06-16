import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ShopCard from "../Components/ShopCard.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../redux/actions/actions";

const ShopScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const shopsData = useSelector((state) => state.shop.shops);

  useEffect(() => {
    console.log("sia lah 1");
    dispatch(actions.getShops());
  }, []);

  useEffect(() => {
    console.log("sia lah 2");
    setFilteredCards(shopsData);
  }, [shopsData]);

  const navigateOpenJio = () => {
    navigation.navigate("ShopForm");
  };

  useEffect(() => {
    searchFilter(search);
  }, [cards]);

  const searchFilter = (text) => {
    if (text) {
      const newData = cards.filter((item) => {
        const textData = text.toUpperCase();
        const itemShopName = item.shopName
          ? item.shopName.toUpperCase()
          : "".toUpperCase();
        const itemCollectionTime = item.collectionTime
          ? item.collectionTime.toUpperCase()
          : "".toUpperCase();
        const itemCollectionPoint = item.collectionPoint
          ? item.collectionPoint.toUpperCase()
          : "".toUpperCase();
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

  const navigateGroupBuy = (data) => {
    navigation.navigate("GroupBuy", { shopData: data });
  };

  function renderCard({ item }) {
    var imageUrl =
      "https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png";
    try {
      if (item.items[0].imageURL != undefined) {
        imageUrl = item.items[0].imageURL;
      }
    } catch (e) {
      console.log("WARNING: at shop screen line 102", e);
    }

    return (
      <TouchableOpacity onPress={() => navigateGroupBuy(item)}>
        <ShopCard
          shopName={item.shopName}
          imageURL={imageUrl}
          // imageLocal={item.imageLocal}
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
          onChangeText={(text) => searchFilter(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={navigateOpenJio}>
          <MaterialCommunityIcons size={40} name="plus-box" color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={filteredCards}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc300",
    padding: 8,
  },
  searchbar: {
    flex: 0.9,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    width: "100%",
    flex: 1,
  },
});

export default ShopScreen;
