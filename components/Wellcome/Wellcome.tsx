import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type WellcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Wellcome'>;
type Props = {
  navigation: WellcomeNavigationProp;
};

const backImage = require('../../img/1.jpg');
const Logo = require('../../img/logo.png');

const Wellcome = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
    <Text style={styles.text}>Make yourself stronger{"\n"}than your excuses</Text>
    <ImageBackground source={backImage} resizeMode="cover" style={styles.image} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
    <Text style={styles.signUpText}>
      Don't have an account?{' '}
      <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
        Sign up
      </Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  image: {
    width: '100%',
    height: 300,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
  },
  signUpLink: {
    color: 'lightblue',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default Wellcome;
