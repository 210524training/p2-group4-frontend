import React, { useState, useContext } from 'react';
import UserContext from '../../hooks/context/UserContext';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles';

const AddMemoScreen: React.FC<unknown> = () => {
  const [message, setMessage] = useState<string>('');
  const { role, user } = useContext(UserContext);
  const nav = useNavigation();

  const handleSubmitMemo = async () => {
    // TODO: axios request 
    nav.navigate('Home');
  }

  return (
    <View style={styles.container}>    
        <Text style={styles.title}>
            Submit Memo
        </Text>
        <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ width: '100%', padding: 25, }}>
            <TextInput
            style={styles.textInput1}
            placeholder="Message"
            onChangeText={text => setMessage(text)}
            />
            <Button
                title="Submit"
                color="blue"
                onPress={ () => handleSubmitMemo() }
            ></Button>
        </View>
    </View >
  );
}

export default AddMemoScreen;