import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const movies = [
  { id: 1, title: 'Película 1', image: require('./assets/pelicula1.jpg') },
  { id: 2, title: 'Película 2', image: require('./assets/pelicula2.jpg') },
  { id: 3, title: 'Película 3', image: require('./assets/pelicula3.jpg') },
  { id: 4, title: 'Película 4', image: require('./assets/pelicula4.jpg') },
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

  const confirmSelection = () => {
    setSelectedMovie(null);
    setSeats(seatsArray);
  };

  const goBack = () => {
    setSelectedMovie(null);
    setSeats(seatsArray);
  };

  return (
    <View style={styles.container}>
      {!selectedMovie ? (
        <View>
          <Text style={styles.title}>Selecciona una película:</Text>
          <View style={styles.movieContainer}>
            {movies.map((movie) => (
              <TouchableOpacity key={movie.id} onPress={() => setSelectedMovie(movie)}>
                <Image source={movie.image} style={styles.movieImage} />
                <Text style={styles.movieTitle}>{movie.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{selectedMovie.title}</Text>
          <Image source={selectedMovie.image} style={styles.selectedMovieImage} />
          <View style={styles.seatsContainer}>
            {seats.map((seat, index) => (
              <TouchableOpacity key={index} onPress={() => selectSeat(index)} style={[styles.seat, seat && styles.selectedSeat]}>
                <Text style={styles.seatText}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={confirmSelection} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={styles.backButton}>
              <Text style={styles.buttonText}>Atrás</Text>
            </TouchableOpacity>
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
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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
    borderRadius: 10,
  },
  selectedMovieImage: {
    width: 200,
    height: 300,
    marginLeft: 80,
    margin: 20,
    borderRadius: 10,
    padding: 80,
  },
  movieTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: '#555',
  },
  seatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seat: {
    width: 30,
    height: 30,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  selectedSeat: {
    backgroundColor: '#4CAF50',
  },
  seatText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  occupiedSeat: {
    backgroundColor: '#FF5733',
  }
});

export default App;
