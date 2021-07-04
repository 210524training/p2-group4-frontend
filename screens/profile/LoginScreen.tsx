import React, { useState, useContext } from 'react';
import UserContext from '../../hooks/context/UserContext';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { login, logout, UserState, selectUser } from '../../hooks/slices/userSlice';
import User from '../../models/user';

const LoginScreen: React.FC<unknown> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setAuthenticated, setRole, setUser, user, authenticated } = useContext(UserContext);
  const nav = useNavigation();

  const handleLogin = async () => {
    // const response = axios
    // sessionStorage.setItem('user', JSON.stringify(response));
    // if statement to verify
    setAuthenticated(true);
    setRole('Technician'); // fix
    setUser(username);
    nav.navigate('Home');
  }

  const handleLogout = async () => {
    // const response = axios
    sessionStorage.clear();
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
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={{ width: '100%', padding: 25, }}>
                <TextInput
                style={{ fontSize: 18, margin: 10 }}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                defaultValue={username}
                />
                <TextInput
                style={{ fontSize: 18, margin: 10 }}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default LoginScreen;