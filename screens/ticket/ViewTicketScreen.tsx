import React, { useState, Component, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, Modal, Button, Alert } from 'react-native';
import { View } from '../../components/Themed';
import { styles } from '../../styles';
import LoginScreen from '../profile/LoginScreen';

const DATA = [
    {
        Date: '11/22/2021',
        AssetID: 'Apple-1001',
        Issue: 'There is an issue with this computer',
        Room: 'D100',
        Status: 'waiting',
        Technician: 'na',
    },
    {
        Date: '11/21/2021',
        AssetID: 'Windown-1001',
        Issue: 'There is an issue with keyboard',
        Room: 'C200',
        Status: 'waiting',
        Technician: 'na',
    },
    {
        Date: '11/23/2021',
        AssetID: 'Apple-1001',
        Issue: 'There is an issue with screen',
        Room: 'F1122',
        Status: 'waiting',
        Technician: 'na',
    },
];

export default function ViewMemoScreen() {

    const [onLoadText, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [logs, setLog] = useState(DATA);
    
    const keyExtractor = (log:any, index:number) => log.Status;
    const onValueChanged = (log:any) => 
    {    
        var items = logs;
        var index = items.indexOf(log);
        items[index].Status = 'fixing';
        setLog(items);
    };
    const fixed= () => {
        Alert.alert("Status updated to fixed!");
        setModalVisible(false);
    };

    const working = async () => {
        // TODO: axios request to update status
        Alert.alert("Status updated to be maintaining!");
        setModalVisible(false);
    };

    const cancel = async () => {
        setModalVisible(false);
    };

    const handleModal = (log:any) => {
        log
        setModalVisible(true);
        // TODO: needs handle
    }

    const onScreenLoad = () => {
        setText("List of Tickets...");
        // TODO: axios request
    }
    useEffect(() => {
        onScreenLoad();
    }, [])

    const renderItem = ({item}:{item:any}) => (
        <>
            <Item log={item} />
        </>
      );
    const Item = ({log}:{log:any}, index:number) => (
        <View style={styles2.item}>
            <Text style={styles2.title}>{log.Date}</Text>
            <Text style={styles2.txt}>[AssetID]:   {log.AssetID}</Text>
            <Text style={styles2.txt}>[Issue]:   {log.Issue}</Text>
            <Text style={styles2.txt}>[Room]:   {log.Room}</Text>
            <Text onPress={()=>onValueChanged(log)} style={styles2.txt}>[Status]:   {log.Status}</Text>
            <Text style={styles2.txt}>[Technician]:   {log.Technician}</Text>
            <Button onPress={ () => handleModal({log, index}) } title="Edit" color="blue"/>
        </View>
    );

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>
                            Status update?
                        </Text>
                        <View style={styles.break} />
                        <View style={styles.row}>
                        <Button
                            onPress={() => fixed()}
                            title="Fixed"
                            color="green"
                            />
                        <View style={styles.break} />
                        <Button
                            onPress={() => working()}
                            title="Accept"
                            color="blue"
                        />
                        <View style={styles.break} />
                        <Button
                            onPress={() => cancel()}
                            title="Cancel"
                            color="red"
                        />
                        </View>
                    </View>
                    </View>
                </Modal>
        <View style={styles.break}></View>
        <View style={styles.break}></View>
        <Text style={styles.title}>
            Tickets
        </Text>
        <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
        <SafeAreaView style={styles.container}>
            <FlatList
                data={logs}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
        <View style={styles.break}/>
        </View>
    );
}

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#D3D3D3',
      padding: 5,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    txt: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 5,
    },
  });