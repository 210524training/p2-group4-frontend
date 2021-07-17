import React, { useCallback, useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, VirtualizedList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NativeUploady, { UploadyContext } from "@rpldy/native-uploady";
import DocumentPicker from 'react-native-document-picker';
import UserContext from '../../hooks/context/UserContext';
import Asset from '../../models/asset';
import { styles } from '../../styles';
import { getAsset } from '../../remote/backend.api';
export const ViewAssetScreen: React.FC<unknown> = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setAsset, setTag } = useContext(UserContext);
    const [DATA, setDATA] = useState<Asset[] | null>(null);
    const nav = useNavigation();

    const viewDetail = (asset1:Asset) => {
      setAsset(asset1);
      setTag(asset1.asset_tag);
      console.log(asset1);
      nav.navigate('ViewDetail');
  }

      const onScreenLoad = async () => {
        const res = await getAsset();
        console.log(res);
        setDATA(res);
        console.log("dafadf, ", DATA)
      }
  
      useEffect(() => {
        onScreenLoad();
      }, [])

      const renderItem = ({item}:{item:any}) => (
        <>
            <Item asset={item} />
        </>
      );
    const Item = ({asset}:{asset:Asset}) => (
        <View style={styles2.asset}>
            <Text style={styles2.title}>{asset.assetName}</Text>
            <Text style={styles2.txt}>-[Asset Tag]:   {asset.asset_tag}</Text>
            <Text style={styles2.txt}>-[Asset Name]:   {asset.assetName}</Text>
            <Text style={styles2.txt}>-[Modeln]:   {asset.model}</Text>
            <Button onPress={()=>viewDetail(asset)} title="View Detail" />
        </View>
    )

        return (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              initialNumToRender={4}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              // style={styles.container}
            />
          </SafeAreaView>
        );
    
        }
      
// export const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: StatusBar.currentHeight,
//     },
//     scrollView: {
//       backgroundColor: 'pink',
//       marginHorizontal: 20,
//     },
//     text: {
//       fontSize: 42,
//     },
//   });
  
export  const styles2 = StyleSheet.create({
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
    asset:{
      backgroundColor: 'white',
      padding: 6,
      marginVertical: 5,
      marginHorizontal: 5,
      width:400,
      
    }
  });