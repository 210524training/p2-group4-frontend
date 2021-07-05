import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NativeUploady, { UploadyContext } from "@rpldy/native-uploady";
import DocumentPicker from 'react-native-document-picker';
import UserContext from '../../hooks/context/UserContext';
import Asset from '../../models/asset';
const ViewAssetScreen: React.FC<unknown> = () => {
    const asset1 = new Asset('Bobby-CM','1516549', 'Computing Device','Dell', 'Larry', '','','HR','Windows 10','404');
    const asset2 = new Asset('Jerrys life','15156494', 'Computing Device','HP', 'Luke', '','','Consturction','Windows 10','404');
    const list:Asset[] = [asset1, asset2];
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setAuthenticated, setRole, setUser, user, authenticated } = useContext(UserContext);
    const nav = useNavigation();
        const tabledata = list.map(item => ((item: Asset,) => {
               return (
               <View style={styles.container}>
                   <Text>{item}</Text>
               </View>
               );
        }));
        
    return(
        <View>
            <SafeAreaView
                style={styles.container}
            >
            <FlatList data={list}   renderItem={({item}) => <Text> {item}</Text>}


            style= {styles.scrollView}
            />
            </SafeAreaView>
        </View>
    );
    }

const styles = StyleSheet.create({
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
  
export default ViewAssetScreen;