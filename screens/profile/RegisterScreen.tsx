import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NativeUploady, { UploadyContext } from "@rpldy/native-uploady";
import DocumentPicker from "react-native-document-picker";

const RegisterScreen: React.FC<unknown> = (props) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [Experience, setExperiennce] = useState<number>(0);
  const uploadyContext = useContext(UploadyContext);
  const nav = useNavigation();

  const handleLogin = async () => {
    // handle login
    nav.navigate('Home');
  }

  const handleRegister = async () => {
    Alert.alert('handle register.');
    // needs handle
  }

  const Upload = () => {
    const pickFile = useCallback(async () => {
        const res = await DocumentPicker.pick( {
          type: [DocumentPicker.types.pdf],
        });
        // @ts-ignore
        uploadyContext.upload(res); // doesnt work
    }, [uploadyContext]);
      return (
            <View style={{ margin: 10, width:'30%' }}>
                <Button title="Upload Resume" onPress={ pickFile } />
            </View>
      )
  };
  
  return (
    <View style={styles.container}>
        <>
          <Text style={styles.title}>Register</Text>
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
            <TextInput
              style={{ fontSize: 18, margin: 10 }}
              placeholder="Phone Number"
              onChangeText={text => setPhoneNumber(text)}
              defaultValue={phoneNumber}
            />
            <TextInput
              style={{ fontSize: 18, margin: 10 }}
              placeholder="Years of Experience"
              onChangeText={text => setPhoneNumber(text)}
              defaultValue={phoneNumber}
            />
            <NativeUploady    
                grouped
                maxGroupSize={1}
                method="PUT"
                destination={{url: "https://my-server", headers: {"x-custom": "123"}}}>
                <Upload/>           
            </NativeUploady>
            <Button
              onPress={handleRegister}
              title="Register"
              color="blue"
            />
            <Text
              style={{
                color: 'blue',
                padding: 10,
                textAlign: 'right'
              }}
              onPress={() => nav.navigate('LoginScreen')}
            >
              Login?
            </Text>
          </View>
        </>
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

export default RegisterScreen;