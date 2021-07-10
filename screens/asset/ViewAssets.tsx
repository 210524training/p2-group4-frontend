import React, { useCallback, useContext } from 'react';
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
export const ViewAssetScreen: React.FC<unknown> = () => {
    const asset1 = new Asset('Bobby-CM','1516549','Computing Device','Dell', 'Larry', '','','HR','Windows 10','404');
    const asset2 = new Asset('Jerrys life','15156494', 'Computing Device','HP', 'Luke', '','','Consturction','Windows 10','404');
    const list = [{assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}]

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setAuthenticated, setRole, setUser, user, authenticated, asset, setAsset } = useContext(UserContext);

    const nav = useNavigation();
    const viewDetail = (asset:any, index:number) => {
      setAsset(asset);
      console.log(asset, index);
      nav.navigate('ViewDetail');
  }
        //  const Item =  (assetname:string) =>  {
                  
        //     <Text style={styles.text} >{assetname}</Text>
            
        // };
    // const getItem = (data) => ({
    //   assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''
    // });

      const DATA = [
        {assetName:'Bobby-CM',assetTag:'1516541',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516542',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516543',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516544',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516545',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516546',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516547',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetName:'Bobby-CM',assetTag:'1516548',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}
    ];

      const data:Asset[] = [asset1,asset2];
      

      const renderItem = ({item}:{item:any}) => (
        <>
            <Item asset={item} />
        </>
      );
    const Item = ({asset}:{asset:any}, index:number) => (
        <View style={styles2.asset}>
            <Text style={styles2.title}>{asset.assetName}</Text>
            <Text style={styles2.txt}>-[Asset Tag]:   {asset.assetTag}</Text>
            <Text style={styles2.txt}>-[Asset Name]:   {asset.assetName}</Text>
            <Text style={styles2.txt}>-[Modeln]:   {asset.model}</Text>
            <Button onPress={()=>viewDetail(asset, index)} title="View Detail" />
        </View>
    )

        return (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              initialNumToRender={4}
              renderItem={renderItem}
              keyExtractor={item => item.assetTag}
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