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
import { useDispatch } from 'react-redux';
import Slider from '@react-native-community/slider';

import Header from '../Components/Header';
import AddItem from '../Components/AddItem';
import * as actions from '../redux/actions/actions';
import { getAsyncStorage } from '../utils/AsyncStorageHelper';

const OpenJioScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [shopName, setShopName] = useState('');
  const [aboutShop, setAboutShop] = useState('');
  const [collectionPoint, setCollectionPoint] = useState('');
  const [scDate, setSCDate] = useState('');
  const [ofcDate, setOFCDate] = useState('');
  const [goalMoney, setGoalMoney] = useState(0);
  const [items, setItems] = useState([]);

  const addData = data => {
    setItems(prevState => {
      const prevItems = prevState;
      const newItems = prevItems.filter(item => item.id !== data.id);

      return newItems.concat(data);
    });
  };

  const addItem = () => {
    if (items.length === 0) {
      setItems(prevState =>
        prevState.concat([{ id: 1, name: '', description: '', imageUrl: '' }])
      );
      return;
    }

    setItems(prevState => {
      const latestId = prevState[prevState.length - 1].id;

      return prevState.concat({
        id: latestId + 1,
        name: '',
        description: '',
        imageUrl: ''
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

  const onChange = selectedDate => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const addShopHandler = () => {
    try {
      const shop = {
        shopName: shopName,
        description: aboutShop,
        items: [...items],
        collectionPoint: collectionPoint,
        collectionTime: scDate,
        orderFormClosing: ofcDate,
        currentMoney: 0,
        goalMoney: goalMoney
      };

      dispatch(actions.createShop(shop));

      getAsyncStorage('shops').then(data => {
        navigation.navigate('Shop', { shops: data });
      });

      navigation.goBack();
    } catch (error) {
      throw new Error(error);
    }
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
              placeholder='Shop Name'
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
                <AddItem key={id} id={id} add={addData} remove={removeItem} />
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
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Slider
                style={styles.input}
                value={goalMoney}
                onValueChange={val => setGoalMoney(val)}
                minimumValue={0}
                maximumValue={1000}
                minimumTrackTintColor='#FF9D2C'
                maximumTrackTintColor='#FF9D2C'
                thumbTintColor='#FF9D2C'
                step={1}
              />
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <View style={{ flex: 0.33, alignItems: 'center' }}>
                  <Subheading>$0</Subheading>
                </View>
                <View style={{ flex: 0.33, alignItems: 'center' }}>
                  <Subheading style={{ fontWeight: 'bold' }}>
                    {`$${goalMoney}`}
                  </Subheading>
                </View>
                <View style={{ flex: 0.33, alignItems: 'center' }}>
                  <Subheading>$1000</Subheading>
                </View>
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
            <TextInput
              style={styles.input}
              placeholder='DD/MM/YYYY'
              label='Self Collection Date'
              mode='outlined'
              value={scDate}
              onChangeText={input => setSCDate(input)}
              right={<TextInput.Icon name='calendar' />}
            />
            <TextInput
              style={styles.input}
              placeholder='DD/MM/YYYY'
              label='Order Form Closing'
              mode='outlined'
              value={ofcDate}
              onChangeText={input => setOFCDate(input)}
              right={<TextInput.Icon name='calendar' />}
            />
            <Button
              mode='contained'
              style={styles.input}
              onPress={addShopHandler}
            >
              Start Jio!
            </Button>
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
