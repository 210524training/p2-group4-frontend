import { Component, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import StyleSheet from 'react-native'
import { useState } from 'react'
 
const Picker = () => {
  
  const [visible, setVisibility] = useState<boolean>(false);
  const [picked, setPicked] = useState<string>('');

  const options = [
    {
      key: 'Asset Tag',
      label: 'Asset Tag',
    },
    {
      key: 'Asset Name',
      label: 'Asset Name',
    },
    {
      key: 'make',
      label: 'Make',
    },
    {
      key: 'model',
      label: 'Model',
    },
    {
      key: 'Faculty/ Staff Member',
      label: 'Faculty/ Staff Member',
    },
    {
        key: 'Type of OS',
        label: 'Type of OS',
    },
    {
      key: 'Department',
      label: 'Department',
    },
    {
      key: 'Building',
      label: 'Building',
    },
    {
      key: 'Room',
      label: 'Room',
    },
    {
      key: 'Date Issued',
      label: 'Date Issued',
    },
    {
      key: 'Date Decomissioned',
      label: 'Date Decomissioned',
    },
  ];

  function handleVisibility() {
    setVisibility(true)
  };

  function handleSelect(picked: string) {
    setPicked(picked)
    setVisibility(false)
  };

  function handleCancel() {
    setVisibility(false)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleVisibility}>
        <Text>Select...</Text>
      </TouchableOpacity>      
      <Text style={appStyles.label}>Selected:</Text>
      <Text>{picked}</Text>
      <ModalFilterPicker
        visible={visible}
        onSelect={handleSelect}
        onCancel={handleCancel}
        options={options}
      />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {

    },
})

export default Picker