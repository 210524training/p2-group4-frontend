import React, { useState, Component, useEffect, useContext } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, Modal, Button, Alert, TimePickerAndroidTimeSetAction } from 'react-native';
import { View } from '../../components/Themed';
import UserContext from '../../hooks/context/UserContext';
import { styles } from '../../styles';
import Tickets from '../../models/tickets';

const DATA3:Array<Tickets> = [
    {
        id: '67456345',
        date: '11/22/2021',
        asset_tag: 'Apple-1001',
        issue: 'There is an issue with this computer',
        room: 'D100',
        status: 'waiting',
        technician: 'na',
    },
    {
        id: '3412133',
        date: '11/21/2021',
        asset_tag: 'Windown-1001',
        issue: 'There is an issue with keyboard',
        room: 'C200',
        status: 'waiting',
        technician: 'na',
    },
    {
        id: '3345243',
        date: '11/23/2021',
        asset_tag: 'Apple-1001',
        issue: 'There is an issue with screen',
        room: 'F1122',
        status: 'waiting',
        technician: 'na',
    },
];

export default function ViewMemoScreen() {

    const [onLoadText, setText] = useState("");
		const [ticket, setTicket] = useState<Tickets | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { tickets, setTickets } = useContext(UserContext);

    const fixed= () => {
			const log = ticket;
			// TODO: axios request to update status
			if(ticket) {
				for (let i=0; i<DATA3.length; i++) {
					if(DATA3[i].id === ticket.id) {
						DATA3[i].status = 'resolved';
						setTickets(DATA3);
						break;
					}
				}
			}
			Alert.alert("Status updated to fixed!");
			setModalVisible(false);
    };

    const working = async () => {
        // TODO: axios request to update status
				if(ticket) {
					for (let i=0; i<DATA3.length; i++) {
						if(DATA3[i].id === ticket.id) {
							DATA3[i].status = 'fixing';
							setTickets(DATA3);
							break;
						}
					}
				}
        Alert.alert("Status updated to be maintaining!");
        setModalVisible(false);
    };

    const cancel = async () => {
        setModalVisible(false);
    };

    const handleModal = (log:Tickets) => {
			setTicket(log);
      setModalVisible(true);
        // TODO: needs handle
    }

    const onScreenLoad = () => {
        setText("List of Tickets...");
        // TODO: axios request
    }
    useEffect(() => {
        setTickets(DATA3);
        onScreenLoad();
    }, [])

    const renderItem = ({item}:{item:Tickets}) => (
        <>
            <Item log={item} />
        </>
      );
    const Item = ({log}:{log:Tickets}) => (
        <View style={styles2.item}>
					<Text style={styles2.title}>{log.date}</Text>
					<Text style={styles2.txt}>[AssetID]:   {log.asset_tag}</Text>
					<Text style={styles2.txt}>[Issue]:   {log.issue}</Text>
					<Text style={styles2.txt}>[Room]:   {log.room}</Text>
					<Text style={styles2.txt}>[Status]:   {log.status}</Text>
					<Text style={styles2.txt}>[Technician]:   {log.technician}</Text>
					<Button onPress={ () => handleModal(log) } title="Edit" color="blue"/>
        </View>
    );

    return (
			<View style={styles.container}>
				<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						>
					<View style={styles.centeredView}>
					<View style={styles.modalView}>
							<Text style={styles.title}>
								Status update?
							</Text>
							<View style={styles.break} />
							<View style={styles.row}>
							<Button
								onPress={() => fixed()}
								title=" Fixed "
								color="green"
							/>
							<View style={styles.break} />
							<Button
								onPress={() => working()}
								title="Accept"
								color="blue"
							/>
							<View style={styles.break} />
							<Button
								onPress={() => cancel()}
								title="Cancel"
								color="red"
							/>
							</View>
						</View>
					</View>
				</Modal>
				<View style={styles.break}></View>
				<View style={styles.break}></View>
				<Text style={styles.title}>
						Tickets
				</Text>
				<View style={styles.separatorS} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
				<SafeAreaView style={styles.container}>
						<FlatList
								data={tickets}
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