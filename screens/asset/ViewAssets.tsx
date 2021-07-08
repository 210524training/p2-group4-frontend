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
      const DATA = [{assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''}];

      const getItem = (data, index) => ({
        assetname:'Bobby-CM',asset_tag:'1516549',deviceGroup:'Computing Device',model:'Dell', assignee:'Larry', date_issued:''
      });
      
      const getItemCount = (data) => 50;
      
      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
      const App = () => {
        return (
          <SafeAreaView style={styles.container}>
            <VirtualizedList
              data={DATA}
              initialNumToRender={4}
              renderItem={({ item }) => <Item title={item.asset_tag} />}
              keyExtractor={item => item.asset_tag}
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </SafeAreaView>
        );
    
        }
      }
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
  
