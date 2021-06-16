import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function BuyerOrders({imageUri, name}) {
  return (
    <View style={{ height: 150, width: 10, marginLeft: 20, borderWidth: 1, borderColor: '#FF9D2C' }}>
        <View style={{ flex: 2 }}>
            <Image source={imageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}/>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <Text>{name}</Text>
        </View>
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});