import React, { useState, Component, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import { styles } from '../../styles';

const DATA = [
    {
        Date: '11/22/2021',
        User: 'Daniel Kim',
        Message: 'There is an issue with this computer',
    },
    {
        Date: '11/21/2021',
        User: 'Ben Smith',
        Message: 'We are in short of supply of this.',
    },
    {
        Date: '11/20/2021',
        User: 'Lisa Lee',
        Message: 'Need help with something.',
    },
];

export default function ViewMemoScreen() {

    const [onLoadText, setText] = useState("");

    const onScreenLoad = () => {
        setText("List of logs...");
        // fetch logs axios call
    }
    useEffect(() => {
        onScreenLoad();
    }, [])

    const renderItem = ({item}:{item:any}) => (
        <>
            <Item log={item} />
        </>
      );
    const Item = ({log}:{log:any}) => (
        <View style={styles2.item}>
            <Text style={styles2.title}>{log.Date}</Text>
            <Text style={styles2.txt}>[User]:   {log.User}</Text>
            <Text style={styles2.txt}>[Message]:   {log.Message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
        <View style={styles.break}></View>
        <View style={styles.break}></View>
        <Text style={styles.title}>
            Memos
        </Text>
        <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
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