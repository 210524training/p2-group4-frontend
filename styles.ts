import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    left: {
      textAlign: 'left',
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'flex-end',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 15,
      height: 1,
      width: '80%',
    },
    separatorS: {
        marginVertical: 7,
        height: 1,
        width: '50%',
      },
    textInput1: {
      fontSize: 18, 
      margin: 10,
      backgroundColor: '#F0F8FF',
      padding: 3,
    },
    break: {
      margin:5,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
  });