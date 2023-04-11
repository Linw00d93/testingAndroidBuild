import React, { useState } from 'react';
import { View, Alert,StyleSheet  } from 'react-native';
import { Input, Button } from 'react-native-elements';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(text) {
    setEmail(text);
  }

  function handlePasswordChange(text) {
    setPassword(text);
  }

  function handleLogin() {
    if (!email || !password) {
      // Show an error message if either field is empty
      Alert.alert('Please enter your email and password');
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);

    // TODO: Send login request to your server
  }

  return (
      <View style={styles.container}>
        <Input
          placeholder="Email"
          //leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          value={email}
          onChangeText={handleEmailChange}
        />
        <Input
          placeholder="Password"
          //leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Button  title="Login" onPress={handleLogin} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });
  
  
export default LoginPage;
