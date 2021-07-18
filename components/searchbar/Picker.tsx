import { Component, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import StyleSheet from 'react-native'
 
export default class Picker extends Component {
  constructor (props, ctx) {
    super(props, ctx);
 
    this.state = {
      visible: false,
      picked: null,
    };
  }
 
  render() {
    const { visible, picked } = this.state;
 
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
 
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
          <Text>Select country</Text>
        </TouchableOpacity>      
        <Text style={appStyles.label}>Selected:</Text>
        <Text>{picked}</Text>
        <ModalFilterPicker
          visible={visible}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          options={options}
        />
      </View>
    );
  }
 
  onShow = () => {
    this.setState({ visible: true });
  }
 
  onSelect = (picked) => {
    this.setState({
      picked: picked,
      visible: false
    })
  }
 
  onCancel = () => {
    this.setState({
      visible: false
    });
  }
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {

    },
})