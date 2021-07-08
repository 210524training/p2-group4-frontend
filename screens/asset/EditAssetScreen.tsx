import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, Platform, ScrollView, Modal } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddLogScreen from '../log/AddLogScreen';

const EditAssetScreen: React.FC<unknown> = (props) => {

  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [facultyStaff, setFacultyStaff] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [building, setBuilding] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [dateDecomissioned, setDateDecomissioned] = useState(new Date(1598051730000));
  const [OSType, setOSType] = useState<string>('');
  const [serialNumber, setSerialNumber] = useState<number>(0);
  const [AssetTag, setAssetTag] = useState<string>('');
  const [assetName, setAssetName] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const nav = useNavigation();
  const [dateRecieved, setDateRecieved] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleEdit = async () => {
    Alert.alert('handle edit.');
    // needs handle
  }

  const handleDateRecived = (event:any, selectedDate:Date) => {
    const currentDate = selectedDate || dateRecieved;
    setShow(Platform.OS === 'ios');
    setDateRecieved(currentDate);
  };

  const handleDateDecomissioned = (event:any, selectedDate:Date) => {
    const currentDate = selectedDate || dateDecomissioned;
    setShow(Platform.OS === 'ios');
    setDateDecomissioned(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const showMode1 = () => {
    setShow1(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Edit Asset
      </Text>
      <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
        <View style={{ width: '100%', padding: 30, }}>
          <TextInput
            style={styles.textInput1}
            placeholder="Asset Name"
            onChangeText={text => setAssetName(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Group Name"
            onChangeText={text => setGroupName(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Asset Tag"
            onChangeText={text => setAssetTag(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Serial Number"
            onChangeText={text => setSerialNumber(Number(text))}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Type of OS"
            onChangeText={text => setOSType(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Make"
            onChangeText={text => setMake(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Make"
            onChangeText={text => setMake(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Model"
            onChangeText={text => setModel(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Faculty Name"
            onChangeText={text => setFacultyStaff(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Department"
            onChangeText={text => setDepartment(text)}
          />
          <TextInput
            style={styles.textInput1}
            placeholder="Building"
            onChangeText={text => setBuilding(text)}
          />
          <View>
              <Button onPress={showMode} title="Date Recieved" />
          </View>
          {show && (
              <DateTimePicker
              testID="dateTimePicker"
              value={dateRecieved}
              is24Hour={true}
              display="default"
              onChange={ () => handleDateRecived } 
              />
          )}
          <View style={styles.break} />
          <View>
              <Button onPress={showMode1} title="Date Decomissioned" />
          </View>
          {show1 && (
              <DateTimePicker
              testID="dateTimePicker"
              value={dateDecomissioned}
              is24Hour={true}
              display="default"
              onChange={ () => handleDateDecomissioned } 
              />
          )}
          <View style={styles.break} />
          <Button
            onPress={() => handleEdit()}
            title="Edit"
            color="blue"
          />
        </View>
    </View>
  );
}

export default EditAssetScreen;