import React, { useState, useContext } from 'react';
import UserContext from '../../hooks/context/UserContext';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { login, logout, UserState, selectUser } from '../../hooks/slices/userSlice';
import User from '../../models/user';
import { styles } from '../../styles';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { AccountContext } from '../../cognito/attributes/components/Accounts';
import { useEffect } from 'react';


const LoginScreen: React.FC<unknown> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authenticate } = useContext(AccountContext);
  
  const { setAuthenticated, setRole, setUser, user, authenticated } = useContext(UserContext);
  const nav = useNavigation();

// const url = "https://1u0w2v288k.execute-api.us-east-1.amazonaws.com/dev/user"

  const handleLogin = async () => {
    // const response = axios
    // sessionStorage.setItem('user', JSON.stringify(response));
    // if statement to verify
    // setAuthenticated(true);
    // setUser(username);
    // nav.navigate('Home');
    authenticate(username, password)
      .then(data => {
        console.log('Logged in', data);
      })
      .catch(err => {
        console.error('Failed to Login', err)
      })
  };

  const handleLogout = async () => {
    // const response = axios
    setAuthenticated(false);
    setUser('');
    setRole('');
    nav.navigate('Home');
    }

  return (
    <View style={styles.container}>
        
        { authenticated &&
            <>
            <Text style={styles.title}>
                Logged-In as { user }
            </Text>
            <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
            <Button
                title="Logout"
                color="blue"
                onPress={ () => handleLogout() }
            ></Button>
            </>
        }
        { !authenticated &&
            <>
            <Text style={styles.title}>Log In:</Text>
            <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
            <View style={{ width: '100%', padding: 25, }}>
                <TextInput
                style={styles.textInput1}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                defaultValue={username}
                />
                <TextInput
                style={styles.textInput1}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                />
                <TextInput
                style={styles.textInput1}
                placeholder="role"
                onChangeText={text => setRole(text)}
                />
                <View style={styles.break} />
                <Button
                onPress={handleLogin}
                title="Sign in"
                color="blue"
                />
                <Text
                style={{
                    color: 'blue',
                    padding: 10,
                    textAlign: 'right'
                }}
                onPress={() => {
                    nav.navigate('RegisterScreen');
                }}
                >
                Register
                </Text>
            </View>
            </>
        }
    </View >
  );
}

export default LoginScreen;