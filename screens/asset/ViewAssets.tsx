import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../hooks/context/UserContext';
import Asset from '../../models/asset';
import { styles } from '../../styles';
import { getAsset } from '../../remote/backend.api';
export const ViewAssetScreen: React.FC<unknown> = () => {

    const { setAsset, setAssets, assets } = useContext(UserContext);
    const nav = useNavigation();

    const viewDetail = (asset1:Asset) => {
      setAsset(asset1);
      console.log(asset1);
      nav.navigate('ViewDetail');
  }

      const onScreenLoad = async () => {
        const res = await getAsset();
        setAssets(res);
        console.log(res);
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
              data={assets} // change this to filtered asset array
              initialNumToRender={4}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              // style={styles.container}
            />
          </SafeAreaView>
        );
    
        }
      
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