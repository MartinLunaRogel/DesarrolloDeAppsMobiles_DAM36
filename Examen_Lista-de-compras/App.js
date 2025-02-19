import { CheckBox } from '@rneui/base';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [newProduct, setNewProduct] = useState('');
  const [products, setProducts] = useState([{ id: 'checked1', title: 'Aguita', checked: false }]);

  const addProductHandler = () => {
    if (newProduct.trim()) {
      setProducts([...products, { id: `checked${products.length + 1}`, title: newProduct, checked: false }]);
      setNewProduct('');
    }
  };

  const toggleChecked = (id) => {
    setProducts(products.map(product => product.id === id ? { ...product, checked: !product.checked } : product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Text style={styles.navbarText}>Lista de Compras</Text>
      </View>
      <View style={styles.navbarBody}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextBody}>Productos</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo producto"
            value={newProduct}
            onChangeText={setNewProduct}
          />
          <TouchableOpacity style={styles.addButton} onPress={addProductHandler}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bodyContent}>
          {products.map(product => (
            <CheckBox
              key={product.id}
              title={product.title}
              containerStyle={styles.CheckBox}
              checked={product.checked}
              onPress={() => toggleChecked(product.id)}
            />
          ))}
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
  navbarContainer: {
    backgroundColor: '#006266',
    height: '12%',
    width: '100%',
    marginTop: '0%',
    justifyContent: 'center'
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 117,
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
  titleTextBody: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: '5%'
  },
  bodyContent: {
    height: '90%',
    width: '100%',
    backgroundColor: '#d1d8e0',
    marginBottom: '10%'
  },
  CheckBox: {
    backgroundColor: "#c5cbd3",
    width: '80%',
    fontSize: 15,
    marginLeft: '10%',
    borderRadius: 12
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#006266',
    borderRadius: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff9'
  },
  addButton: {
    backgroundColor: '#006266',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  }
});