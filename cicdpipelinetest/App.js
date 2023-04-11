/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './LoginPage';
import Splash from './Splash'

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 300); // Change the delay time to whatever value you want (in milliseconds)
  }, []);

  return (
    <View style={styles.container}>
      {showSplash ? <Splash /> : <LoginPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: '#fff',
  },
})