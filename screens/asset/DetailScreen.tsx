import React, { useState, useContext, useEffect } from 'react';
import { styles } from '../../styles';
import AddAssetScreen from '../../screens/asset/AddAsset';
import AddLogScreen from '../../screens/log/AddLogScreen';
import { Text, View } from '../../components/Themed';
import ViewLogScreen from '../../screens/log/ViewLogScreen';
import { Alert, Button, FlatList, Modal, SafeAreaView, ScrollView, StatusBar,  StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../hooks/context/UserContext';


const DetailScreen: React.FC<unknown> = () => {
  const { setAuthenticated, setRole, setUser, user, authenticated, asset, setAsset } = useContext(UserContext);
    const [onLoadText, setText] = useState("");
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const noDelete = () => {
        Alert.alert("Wil not be deleted");
        setModalVisible(false);
    };

    const yesDelete = async () => {
    // axios request to delete
    Alert.alert("axios message");
    setModalVisible(false);
    };

    const handleModal = () => {
    setModalVisible(true);
    // needs handle
    }

    const editDetail = () => {
      nav.navigate('EditDetail');
    }

    const onScreenLoad = () => {
        setText("Detail info of asset");
        // fetch logs axios call
    }
    
    useEffect(() => {
        onScreenLoad();
    }, [])

    const Item = ({data}:{data:any}) => (
        <View style={styles2.item}>
            <Text style={styles2.title}>[AssetTag]:  {data.AssetTag}</Text>
            <Text style={styles2.txt}>[Asset Name]:  {data.assetName}</Text>
            <Text style={styles2.txt}>[Device Group]:  {data.deviceGroup}</Text>
            <Text style={styles2.txt}>[Model]:  {data.model}</Text>
            <Text style={styles2.txt}>[Date Recieved]:  {data.date_issued}</Text>
            <Text style={styles2.txt}>[Assignee]:  {data.assignee}</Text>
        </View>
    );
      
    return (
        <>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.title}>
                  Are you sure?
              </Text>
              <View style={styles.break} />
              <View style={styles.row}>
                <Button
                  onPress={() => yesDelete()}
                  title="Delete"
                  color="red"
                  />
                <View style={styles.break} />
                <Button
                  onPress={() => noDelete()}
                  title="Cancel"
                  color="green"
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
        <View style={styles.break}></View>
        <Text style={styles.title}>
            Asset Detail
        </Text>
        <View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
            <SafeAreaView style={styles.container}>
                <Item data={asset}/>
            </SafeAreaView>
            <View style={styles.break} />
            <View style={styles.row}>
                <Button onPress={editDetail} title="  Edit  " />
                <View style={styles.break} />
                <Button
                onPress={handleModal}
                title="Delete"
                color="red"
                />
            </View>
        </View>
        <ViewLogScreen/>
    </>
    );
}

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#B0C4DE',
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 5,
    },
    txt: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 5,
    },
  });



export default DetailScreen;