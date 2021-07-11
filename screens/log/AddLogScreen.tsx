import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, Platform, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';
import { styles } from '../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddLogScreen: React.FC<unknown> = (props) => {

  const [tech, setTech] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [problemType, setProblemType] = useState<string>('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const handleSubmitLog = async () => {
    Alert.alert('handle log.');
    // needs handle
  }

  const handleDate = (event:any, selectedDate:Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Add Repair Log
        </Text>
        <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ width: '100%', padding: 30, }}>
            <TextInput
                style={styles.textInput1}
                placeholder="Tech"
                onChangeText={text => setTech(text)}
            />
            <TextInput
                style={styles.textInput1}
                placeholder="Problem Type"
                onChangeText={text => setProblemType(text)}
            />
            <TextInput
                style={styles.textInput1}
                placeholder="Description"
                onChangeText={text => setDescription(text)}
            />
            <View>
                <Button onPress={showMode} title="Date" />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={true}
                display="default"
                onChange={() => handleDate} 
                />
            )}
            <View style={styles.break} />
            <Button
                onPress={() => handleSubmitLog()}
                title="Submit"
                color="blue"
            />
        </View>
    </View >
  );
}

export default AddLogScreen;