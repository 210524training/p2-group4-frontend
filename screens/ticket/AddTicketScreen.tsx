import React, { useState, useContext } from 'react';
import UserContext from '../../hooks/context/UserContext';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles';

const AddTicketScreen: React.FC<unknown> = () => {
  const [serial, setSerial] = useState<string>('');
  const [assetID, setAssetID] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [issue, setIssue] = useState<string>('');
  const { user } = useContext(UserContext);
  const nav = useNavigation();

  const handleAddTicket = async () => {
    // const response = axios
    // sessionStorage.setItem('user', JSON.stringify(response));
    // if statement to verify
    Alert.alert("Thanks for the submission!")
    nav.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Ticket</Text>
      <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
      <View style={{ width: '100%', padding: 25, }}>
          <TextInput
          style={styles.textInput1}
          placeholder="Asset ID"
          onChangeText={text => setAssetID(text)}
          />
          <TextInput
          style={styles.textInput1}
          placeholder="Serial Number"
          onChangeText={text => setSerial(text)}
          />
          <TextInput
          style={styles.textInput1}
          placeholder="Room Number"
          onChangeText={text => setRoom(text)}
          />
          <TextInput
          style={styles.textInput1}
          placeholder="Issue"
          onChangeText={text => setIssue(text)}
          />
          <View style={styles.break} />
          <Button
          onPress={handleAddTicket}
          title="Submit"
          color="blue"
          />
      </View>
    </View >
  );
}

export default AddTicketScreen;