import { CheckBox } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const items = [
    {id: 'checked1', title: 'leche'},
    {id: 'checked2', title: 'huevo'},
    {id: 'checked3', title: 'cereal'},
    {id: 'checked4', title: 'azucal'},
  ]

  const 
  const [checkedI, setChecked] = useState(false);
  const checkHnandler = () => {
    checked ? setChecked(false) : setChecked(true)
  }

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
            <CheckBox title="leche" containerStyle={styles.CheckBox} checked ={checked} onPress={checkHnandler}/>
            <CheckBox title="Pan" containerStyle={styles.CheckBox} checked ={checked2} onPress={checkHnandler2}/>
            <CheckBox title="Huevo"containerStyle={styles.CheckBox} checked ={checked3} onPress={checkHnandler3}/>
            <CheckBox title="Confleis" containerStyle={styles.CheckBox} checked ={checked4} onPress={checkHnandler4}/>
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
      borderRadius: 12

    }

});
