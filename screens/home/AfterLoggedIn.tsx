import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import UserContext from '../../hooks/context/UserContext';
import { styles } from '../../styles';
import ViewMemoScreen from '../memo/ViewMemo';

export default function HomeScreen() {
  const nav = useNavigation();
  const { role, user, authenticated } = React.useContext(UserContext);

  const viewDirectory = () => {
    nav.navigate('DirectoryScreen');
  }

  const viewAddMemo = () => {
    nav.navigate('AddMemoScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.break}></View>
      <Text style={styles.title}>Welcome, {user}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
        <Button onPress={viewDirectory} title="Directory" />
        <View style={styles.break}></View>
        <Button onPress={viewAddMemo} title="Add Memo" />
      </View>
      <ViewMemoScreen/>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
