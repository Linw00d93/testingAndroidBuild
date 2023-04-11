/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Splash from './Splash';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Splash/>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
            {/* Add other screens here */}
        </Stack.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  image: {
    width: '20%',
    height: '20%',
  },
});