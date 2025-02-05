import { CheckBox } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Text style={styles.navbarText}>To-Do-List</Text>
      </View>
      <View style={styles.navbarBody}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextBody}>Lista de compras</Text>
        </View>
          <ScrollView style={styles.bodyContent}>
            <CheckBox title="leche" containerStyle={styles.CheckBox}/>
            <CheckBox title="Pan" containerStyle={styles.CheckBox}/>
            <CheckBox title="Huevo"containerStyle={styles.CheckBox}/>
            <CheckBox title="Confleis" containerStyle={styles.CheckBox}/>
            <CheckBox title="Azucar" containerStyle={styles.CheckBox}/>
            <CheckBox title="Cafe" containerStyle={styles.CheckBox}/>
            <CheckBox title="Harina" containerStyle={styles.CheckBox}/>
            <CheckBox title="Cereal" containerStyle={styles.CheckBox}/>
            <CheckBox title="Fruta" containerStyle={styles.CheckBox}/>
            <CheckBox title="Verdura" containerStyle={styles.CheckBox}/>
            <CheckBox title="Chicharron" containerStyle={styles.CheckBox}/>
            <CheckBox title="Queso" containerStyle={styles.CheckBox}/>
            <CheckBox title="Chetos" containerStyle={styles.CheckBox}/>
            <CheckBox title="Vaca" containerStyle={styles.CheckBox}/>
            <CheckBox title="Coca Cola" containerStyle={styles.CheckBox}/>
            <CheckBox title="Sabritas" containerStyle={styles.CheckBox}/>
            <CheckBox title="Balas" containerStyle={styles.CheckBox}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbarContainer:{
      backgroundColor: '#2bcbba',
      height: '12%',
      width:'100%',
      marginTop: '0%',
      justifyContent: 'center'
    },
    navbarText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginStart: 20,
      marginTop: 20,
    },
    navbarBody: {
      height: '90%',
      maxWidth: '100%',
      backgroundColor: '#d1d8e0'
    },
    titleContainer: {
      backgroundColor: '#d1d8e0',
      height: '10%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    titleTextBody:{
      color: '#black',
      fontWeight: 'bold',
      fontSize: 20,
      marginHorizontal: '5%'
    },
    bodyContent:{
      height: '90%',
      width: '100%',
      backgroundColor: '#d1d8e0',
      marginBottom: '10%'
    },
    CheckBox:{
      backgroundColor: "#c5cbd3",
      width: '80%',
      fontSize: 15,
      marginLeft: '10%',
      borderRadius: 10

    }

});
