import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { TextInput, Button, Subheading } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../Components/Header';
import AddItem from '../Components/AddItem';

const OpenJioScreen = () => {
  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [collectionPoint, setCollectionPoint] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      description: 'desc',
      photo: 'link'
    }
  ]);

  const addData = data => {
    console.log(data);
  };

  const addItem = () => {
    if (items.length === 0) {
      setItems([{ id: 1, name: '', description: '', photo: '' }]);
      return;
    }

    setItems(prevState => {
      const latestId = prevState[prevState.length - 1].id;

      return prevState.concat({
        id: latestId + 1,
        name: '',
        description: '',
        photo: ''
      });
    });
  };

  const removeItem = id => {
    setItems(prevState => prevState.filter(item => item.id !== id));
    // updateIds();
  };

  const updateIds = () => {
    setItems(prevState =>
      prevState.map(({ item, id }) => ({ ...item, id: id }))
    );
    setItems(prevState => {
      let items = [...prevState];
      return items.map(item => {
        if (item.id > 1) {
          return { ...item, id: item.id - 1 };
        }
      });
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.kbContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <SafeAreaView style={styles.parentContainer}>
        <Header title='Open Jio Form' back={true} />
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Shope Name'
              label='Shop Name'
              mode='outlined'
              value={shopName}
              onChangeText={input => setShopName(input)}
            />
            <TextInput
              style={styles.input}
              placeholder='Optional'
              label='About the Shop'
              mode='outlined'
              value={aboutShop}
              onChangeText={input => setAboutShop(input)}
            />
            <View style={styles.itemsContainer}>
              {items.map(({ _, id }) => (
                <AddItem
                  key={id}
                  item={{ id: id }}
                  add={addData}
                  remove={removeItem}
                />
              ))}
            </View>
            <View style={styles.addBtnContainer}>
              {items.length > 0 && (
                <View style={{ flex: 1 }}>
                  <Subheading>{`No. of Items: ${items.length}`}</Subheading>
                </View>
              )}
              <View style={{ flex: 1.2, alignItems: 'flex-end' }}>
                <Button
                  style={styles.addBtn}
                  mode='contained'
                  onPress={addItem}
                >
                  Add More Items
                </Button>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder='Location'
              label='Collection Point'
              mode='outlined'
              value={collectionPoint}
              onChangeText={input => setCollectionPoint(input)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kbContainer: {
    flex: 1
  },
  parentContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputContainer: {
    paddingTop: 14,
    alignItems: 'center'
  },
  input: {
    width: '80%',
    marginVertical: 10
  },
  itemsContainer: {
    width: '80%'
  },
  addBtnContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  addBtn: {
    marginVertical: 10
  }
});

export default OpenJioScreen;
