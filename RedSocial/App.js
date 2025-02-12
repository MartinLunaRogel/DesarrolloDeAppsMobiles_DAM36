import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const publicaciones = [
  { id: '1', imagen: require('./assets/gato1.jpg') },
  { id: '2', imagen: require('./assets/gato2.jpeg') },
  { id: '3', imagen: require('./assets/gato3.jpg') },
  { id: '4', imagen: require('./assets/gato4.jpeg') },
  { id: '5', imagen: require('./assets/gato5.jpg') },
  { id: '6', imagen: require('./assets/gato6.jpg') },
];

export default function App() {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.cabeceraPerfil}>
        <Image style={estilos.imagenPerfil} source={require('./assets/gato6.jpg')} />
        <View style={estilos.contenedorEstadisticas}>
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>12</Text>
            <Text style={estilos.etiquetaEstadistica}>Publicaciones</Text>
          </View>
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>124</Text>
            <Text style={estilos.etiquetaEstadistica}>Seguidores</Text>
          </View>
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>89</Text>
            <Text style={estilos.etiquetaEstadistica}>Seguidos</Text>
          </View>
        </View>
      </View>

      <View style={estilos.infoUsuario}>
        <Text style={estilos.nombreUsuario}>Martin Luna</Text>
        <Text style={estilos.descripcionUsuario}>
          Desarrollo de aplicacione moviles | React Native 
        </Text>
        <TouchableOpacity style={estilos.botonEditarPerfil}>
          <Text style={estilos.textoBotonEditar}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Image style={estilos.imagenPublicacion} source={item.imagen} />}
        style={estilos.gridPublicaciones}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 30
  },
  cabeceraPerfil: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#111',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  imagenPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#444',
  },
  contenedorEstadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  estadistica: {
    alignItems: 'center',
  },
  numeroEstadistica: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  etiquetaEstadistica: {
    fontSize: 14,
    color: '#aaa',
  },
  infoUsuario: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  nombreUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  descripcionUsuario: {
    fontSize: 14,
    color: '#ccc',
    marginVertical: 10,
  },
  botonEditarPerfil: {
    backgroundColor: '#444',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  textoBotonEditar: {
    fontSize: 14,
    color: '#fff',
  },
  gridPublicaciones: {
    flex: 1,
    padding: 5,
  },
  imagenPublicacion: {
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    margin: 5,
  },
});
