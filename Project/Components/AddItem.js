import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Title, TextInput, IconButton, Colors } from 'react-native-paper';

const AddItem = ({ item, add, remove }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [save, setSave] = useState(true);

  const sendDataHandler = () => {
    add({ id: item.id, name: name, desc: desc, image: image });
  };

  const saveHandler = () => {
    console.log('saved');
    setSave(!save);
  };

  const removeHandler = () => {
    remove(item.id);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Title>Item</Title>
          {/* <Title>{`Item ${item.id}`}</Title> */}
        </View>
        <View style={styles.actionContainer}>
          {save ? (
            <IconButton
              icon='content-save'
              color={Colors.green900}
              onPress={saveHandler}
            />
          ) : (
            <IconButton
              icon='delete-outline'
              color={Colors.red900}
              onPress={removeHandler}
            />
          )}
        </View>
      </View>
      <TextInput
        label='Name of Item'
        placeholder='Name'
        mode='outlined'
        value={name}
        onChangeText={val => setName(val)}
        style={styles.input}
      />
      <TextInput
        label='Item Description'
        placeholder='Optional'
        mode='outlined'
        value={desc}
        onChangeText={val => setDesc(val)}
        style={styles.input}
      />
      <View style={styles.photoPickerContainer}>
        <Text style={styles.photoLabel}>Photo of Item</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  titleContainer: {
    width: '80%',
    justifyContent: 'center'
  },
  actionContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  input: {
    width: '100%',
    marginVertical: 5
  },
  photoPickerContainer: {
    width: '100%',
    marginVertical: 10
  },
  photoLabel: {
    fontWeight: 'bold'
  }
});

export default AddItem;
