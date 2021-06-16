import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  Dimensions
} from 'react-native';
import { TextInput, Button, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../Components/Header';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const loginHandler = () => {
    navigation.navigate('TabsNavigator');
  };

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView
      style={styles.kbContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <SafeAreaView style={styles.parentContainer}>
        {/* Usage of the Headers to apply to respective screens */}
        {/* <Header title='Test Header' chat={true} back={true} />
        <Divider />
        <Divider />
        <Divider />
        <Header title='' />
        <Divider />
        <Divider />
        <Divider />
        <Header title='Test Header' />
        <Divider />
        <Divider />
        <Divider />
        <Header title='Test Header' back={true} /> */}
        {/* Usage of the Headers to apply to respective screens */}
        <ScrollView>
          <View style={styles.authContainer}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>{`Welcome to\njioMe`}</Text>
            </View>
            {isLogin ? (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  right={<TextInput.Icon name='email' />}
                  value={email}
                  onChangeText={input => setEmail(input)}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Password'
                  secureTextEntry={showPassword}
                  right={
                    <TextInput.Icon
                      onPress={() => setShowPassword(!showPassword)}
                      name='eye'
                    />
                  }
                  value={password}
                  onChangeText={input => setPassword(input)}
                  style={styles.input}
                />
                <Button
                  mode='contained'
                  style={[styles.input, { paddingVertical: 5 }]}
                  onPress={loginHandler}
                >
                  Log In
                </Button>
                <Text style={[styles.input, { textAlign: 'center' }]}>
                  Forgot Password?
                </Text>
              </View>
            ) : (
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Name'
                  autoCapitalize='words'
                  right={<TextInput.Icon name='account' />}
                  value={name}
                  onChangeText={input => setName(input)}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Phone Number'
                  right={<TextInput.Icon name='cellphone' />}
                  value={phoneNo}
                  onChangeText={input => setPhoneNo(input)}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  right={<TextInput.Icon name='email' />}
                  value={email}
                  onChangeText={input => setEmail(input)}
                  style={styles.input}
                />
                <TextInput
                  placeholder='Password'
                  secureTextEntry={showPassword}
                  right={
                    <TextInput.Icon
                      onPress={() => setShowPassword(!showPassword)}
                      name='eye'
                    />
                  }
                  value={password}
                  onChangeText={input => setPassword(input)}
                  style={styles.input}
                />
                <Button
                  mode='contained'
                  style={[styles.input, { paddingVertical: 5 }]}
                  onPress={loginHandler}
                >
                  Sign Up
                </Button>
              </View>
            )}
            <View style={styles.footerContainer}>
              {isLogin ? (
                <Text>
                  Don't have an account?{' '}
                  <Text style={styles.signUp} onPress={toggleHandler}>
                    Sign Up
                  </Text>
                </Text>
              ) : (
                <Text>
                  Have an account?{' '}
                  <Text style={styles.signUp} onPress={toggleHandler}>
                    Log In
                  </Text>
                </Text>
              )}
            </View>
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
  authContainer: {
    flex: 1,
    height: Dimensions.get('window').height
  },
  greetingContainer: {
    flex: 1,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greeting: {
    textAlign: 'center',
    fontSize: 42
  },
  inputContainer: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    marginVertical: 10
  },
  footerContainer: {
    flex: 1,
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  signUp: {
    fontWeight: 'bold'
  }
});

export default AuthScreen;
