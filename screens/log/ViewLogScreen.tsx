import React, { useState, Component, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import { styles } from '../../styles';
import Log from '../../models/log';

const DATA:Array<Log> = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        tech: 'First Item',
        date: '9/30/2020',
        description: 'something wrong with the screen',
        problemType: 'software',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        tech: 'Second Item',
        date: '1/9/2020',
        description: 'everything is good',
        problemType: 'hardware',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        tech: 'Third Item',
        date: '11/12/2020',
        description: 'fixed mouse',
        problemType: 'hardware',
    },
];

export default function ViewLogScreen() {

    const [onLoadText, setText] = useState("");

    const onScreenLoad = () => {
        setText("List of logs...");
        // fetch logs axios call
    }
    useEffect(() => {
        onScreenLoad();
    }, [])

    const renderItem = ({item}:{item:Log}) => (
        <>
            <Item log={item} />
        </>
      );
    const Item = ({log}:{log:Log}) => (
        <View style={styles2.item}>
            <Text style={styles2.title}>{log.date}</Text>
            <Text style={styles2.txt}>-[Tech]:   {log.tech}</Text>
            <Text style={styles2.txt}>-[Problem Type]:   {log.problemType}</Text>
            <Text style={styles2.txt}>-[Description]:   {log.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
        <View style={styles.break}></View>
        <View style={styles.break}></View>
        <Text style={styles.title}>
            Repair Log
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