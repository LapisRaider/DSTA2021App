import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, back, chat, func }) => {
  const navigation = useNavigation();

  const BackIcon = () => (
    <Ionicons
      name='arrow-back'
      size={34}
      style={styles.backIcon}
      color='black'
      onPress={() => navigation.goBack()}
    />
  );
  const ShareIcon = () => (
    <TouchableOpacity>
      <Ionicons name='share-outline' size={34} color='black' />
    </TouchableOpacity>
  );
  const HelpIcon = () => (
    <TouchableOpacity>
      <Ionicons name='help-circle-outline' size={34} color='black' />
    </TouchableOpacity>
  );
  const ChatIcon = ({ pressFunc }) => (
    <TouchableOpacity>
      <Ionicons
        name='chatbubble-ellipses-outline'
        size={34}
        style={styles.chatIcon}
        color='black'
        onPress={pressFunc}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.headerContainer}>
      {title.length > 0 ? (
        back ? (
          chat ? (
            <View style={styles.backContainer}>
              <View style={styles.twentyContainer}>
                <BackIcon />
              </View>
              <View style={styles.backTitleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View
                style={[
                  styles.twentyContainer,
                  { flexDirection: 'row', justifyContent: 'flex-end' }
                ]}
              >
                <ChatIcon pressFunc={func} />
              </View>
            </View>
          ) : (
            <View style={styles.backContainer}>
              <View style={styles.twentyContainer}>
                <BackIcon />
              </View>
              <View style={styles.backTitleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.twentyContainer} />
            </View>
          )
        ) : (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )
      ) : (
        <View style={styles.searchContainer}>
          <Searchbar placeholder='Search jioMe...' style={styles.search} />
          <View style={styles.searchIcons}>
            <ShareIcon />
            <HelpIcon />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  twentyContainer: {
    flex: 0.2
  },
  backTitleContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backChatContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFC300',
    height: 64
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center'
  },
  search: {
    width: '80%'
  },
  searchIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 14
  },
  backIcon: {
    marginHorizontal: 10
  },
  chatIcon: {
    marginRight: 10
  }
});

export default Header;
