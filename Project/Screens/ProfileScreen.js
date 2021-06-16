import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';
import HostOrders from '../Components/HostOrders';
import BuyerOrders from '../Components/HostOrders';
import PastOrders from '../Components/HostOrders';

const ProfileScreen = () => {
  return (
    
    <SafeAreaView style={styles.mainContainer}>
      <Header title='MY JIOs' />
      <ScrollView scrollEventThrottle={10}>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}> 
          <View style={{flex:1, marginTop:20}}>
            <Text style={styles.jioHeader}> JIO-ing</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HostOrders imageUri={require('../Images/rabbit-meat.jpeg')} name='Rabbit Meat' closingDate='20 June 2021' />
              <HostOrders imageUri={require('../Images/burnt-ends.jpeg')} name='Burnt Ends Bakery' closingDate='21 June 2021'/>
              <HostOrders imageUri={require('../Images/whisking-bakes.jpg')} name='Whisking Bakes' closingDate='22 June 2021'/>
            </ScrollView>
          </View>
          <View style={{marginTop:40}}>
            <Text style={styles.jioHeader}> JIO-coming </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BuyerOrders imageUri={require('../Images/rabbit-meat.jpeg')} name='Rabbit Meat2' />
              <BuyerOrders imageUri={require('../Images/burnt-ends.jpeg')} name='Burnt Ends Bakery2' />
              <BuyerOrders imageUri={require('../Images/whisking-bakes.jpg')} name='Whisking Bakes2' />
            </ScrollView>
          </View>
          <View style={{marginTop:40}}>
            <Text style={styles.jioHeader}> JIO-ed </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <PastOrders imageUri={require('../Images/rabbit-meat.jpeg')} name='Rabbit Meat3' />
              <PastOrders imageUri={require('../Images/burnt-ends.jpeg')} name='Burnt Ends Bakery3' />
              <PastOrders imageUri={require('../Images/whisking-bakes.jpg')} name='Whisking Bakes3' />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'white',
  },
  jioHeader: {
    fontSize: 18, 
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },

});

export default ProfileScreen;