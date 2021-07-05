import React, { useState, Component, useEffect } from 'react';
import { Text } from 'react-native';
import { View } from '../../components/Themed';
import { styles } from '../../styles';

export default function ViewLogScreen() {

    const [onLoadText, setText] = useState("");

    const onScreenLoad = () => {
        setText("List of logs...");
        // fetch logs axios call
    }
    useEffect(() => {
        onScreenLoad();
    }, [])

    return (
        <View style={styles.container}>
        <Text style={styles.title}>
            Repair Log
        </Text>
        <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
            <Text>{onLoadText}</Text>
            <Text>{onLoadText}</Text>
            <Text>{onLoadText}</Text>
        </View>
    );
}