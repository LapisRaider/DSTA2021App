import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Text,
  Title,
  TextInput,
  IconButton,
  Colors,
  Button
} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const AddItem = ({ id, add, remove }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [save, setSave] = useState(true);

  const sendDataHandler = () => {
    add({ id: id, name: name, desc: desc, imageURL: image.toString() });
  };

  const saveHandler = () => {
    sendDataHandler();
    setSave(!save);
  };

  const removeHandler = () => {
    remove(id);
  };

  const galleryHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const cameraHandler = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
        <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
            {!image ? (
              <Text>No image yet.</Text>
            ) : (
              <Image style={styles.image} source={{ uri: image }} />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5
            }}
          >
            <Button
              onPress={cameraHandler}
              style={{ flex: 0.5, marginHorizontal: 10 }}
              mode='contained'
            >
              Camera
            </Button>
            <Button
              onPress={galleryHandler}
              style={{ flex: 0.5, marginHorizontal: 10 }}
              mode='contained'
            >
              Gallery
            </Button>
          </View>
        </View>
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
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default AddItem;
