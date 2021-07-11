import React, { useState, Component, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import { styles } from '../../styles';
import Memo from '../../models/memo'

const DATA:Array<Memo> = [
    {
        id: '123',
        date: '11/22/2021',
        user: 'Daniel Kim',
        message: 'There is an issue with this computer',
    },
    {
        id: '123123',
        date: '11/21/2021',
        user: 'Ben Smith',
        message: 'We are in short of supply of this.',
    },
    {
        id: '12341234',
        date: '11/20/2021',
        user: 'Lisa Lee',
        message: 'Need help with something.',
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

    const renderItem = ({item}:{item:Memo}) => (
        <>
            <Item log={item} />
        </>
      );
    const Item = ({log}:{log:Memo}) => (
        <View style={styles2.item}>
            <Text style={styles2.title}>{log.date}</Text>
            <Text style={styles2.txt}>[User]:   {log.user}</Text>
            <Text style={styles2.txt}>[Message]:   {log.message}</Text>
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
                keyExtractor={item => item.id}
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