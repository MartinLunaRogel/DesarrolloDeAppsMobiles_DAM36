import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const movies = [
  { id: 1, title: 'Película 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Película 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Película 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Película 4', image: 'https://via.placeholder.com/150' },
];

const seatsArray = Array(20).fill(false);

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [seats, setSeats] = useState(seatsArray);

  const selectSeat = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);
  };

  return (
    <View style={styles.container}>
      {!selectedMovie ? (
        <View>
          <Text style={styles.title}>Selecciona una película:</Text>
          <View style={styles.movieContainer}>
            {movies.map((movie) => (
              <TouchableOpacity key={movie.id} onPress={() => setSelectedMovie(movie)}>
                <Image source={{ uri: movie.image }} style={styles.movieImage} />
                <Text style={styles.movieTitle}>{movie.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Selecciona un asiento:</Text>
          <View style={styles.seatsContainer}>
            {seats.map((occupied, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.seat, occupied && styles.occupiedSeat]} 
                onPress={() => selectSeat(index)}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  movieContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  movieImage: {
    width: 100,
    height: 150,
    margin: 10,
  },
  movieTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  seatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seat: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: '#4CAF50',
  },
  occupiedSeat: {
    backgroundColor: '#FF5733',
  }
});

export default App;
