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
    const { setAuthenticated, setRole, setUser, user, authenticated } = useContext(UserContext);
    const nav = useNavigation();
        //  const Item =  (assetname:string) =>  {
                  
        //     <Text style={styles.text} >{assetname}</Text>
            
        // };
    // const getItem = (data) => ({
    //   assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''
    // });

      const DATA = [
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''},
        {assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}
    ];

      const data:Asset[] = [asset1,asset2];
      

      const renderItem = ({item}:{item:any}) => (
        <>
            <Item asset={item} />
        </>
      );
    const Item = ({asset}:{asset:any}) => (
        <View style={styles2.asset}>
            <Text style={styles2.title}>{asset.assetname}</Text>
            <Text style={styles2.txt}>-[Tech]:   {asset.asset_tag}</Text>
            <Text style={styles2.txt}>-[Problem Type]:   {asset.problemType}</Text>
            <Text style={styles2.txt}>-[Description]:   {asset.description}</Text>
        </View>
    )

        return (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              initialNumToRender={4}
              renderItem={renderItem}
              keyExtractor={item => item.asset_tag}
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