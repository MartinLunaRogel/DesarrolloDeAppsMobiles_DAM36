import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textHeader: {
      color: 'white',
      fontSize: 20,
      alignItems: 'center',
    },
    body: {
      flex: 9,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textBody: {
      color: 'black',
      fontSize: 20,
      alignItems: 'center',
    },
    flatList: {
      width: '100%',
    },
    flatListText: {
      color: 'black',
      fontSize: 20
    },
    list: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'black'
    }
  });

  export default styles;