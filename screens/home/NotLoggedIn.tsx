import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function NHomeScreen() {
  const nav = useNavigation();

  const viewDirectory = () => {
    nav.navigate('DirectoryScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to blank</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={viewDirectory} title="Directory" />
    </View>
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
