import React, { useState, useContext, useEffect } from 'react';
import { styles } from '../../styles';
import AddAssetScreen from '../../screens/asset/AddAsset';
import AddLogScreen from '../../screens/log/AddLogScreen';
import { Text, View } from '../../components/Themed';
import ViewLogScreen from '../../screens/log/ViewLogScreen';

const DetailScreen: React.FC<unknown> = () => {
    const [onLoadText, setText] = useState("");

    const onScreenLoad = () => {
        setText("Detail info of asset");
        // fetch logs axios call
    }
    useEffect(() => {
        onScreenLoad();
    }, [])

    return (
        <View style={styles.container}>
            <Text>{onLoadText}</Text>
        </View>
    );
}

export default DetailScreen;