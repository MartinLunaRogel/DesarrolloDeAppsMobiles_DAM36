import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import {shareAsync} from "expo-sharing";
import ViewShot from "react-native-view-shot";
import { useRef } from "react";


export default function App() {
  const imageRef = useRef(null);
  const [color, setColor] = useState("#ffffff");
  const [image, setImage] = useState(require("./assets/default.png"));
  const [customText, setCustomText] = useState("");
  const [font, setFont] = useState("normal");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const onSaveImageAsync = async () => {
    try {
        const localUri = await captureRef(imageRef, { format: "png", quality: 1 });
        await MediaLibrary.saveToLibraryAsync(localUri);
        alert("Imagen guardada en la galería.");
    } catch (e) {
        console.log("Error al guardar la imagen:", e);
    }
};


  const handleShare = async () => {
    try {
       const localUri = await imageRef.current.capture();
       await shareAsync(localUri, {
          title: "Tarea compartida",
          message: customText,
        });
    } catch (e){
      console.log("Error al compartir",e);
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permiso para acceder a la galería es necesario.");
      }
    })();
  }, []);
  
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "normal": require("./assets/fonts/TheConfessionRegular.ttf"),
        "cursive": require("./assets/fonts/CookieCrisp.ttf"),
        "typewriter": require("./assets/fonts/LoveDays.ttf"),
        "fancy": require("./assets/fonts/ShinyCrystal.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>

      <View style={styles.navbarContainer}>
        <Ionicons style={styles.navbarIcon} name="chevron-back-outline" size={24} color="#000" />
        <Text style={styles.navbarText}>Lista de tareas</Text>
        <Ionicons style={styles.navbarIcon} name="cog-outline" size={24} color="#000" />
      </View>

      <ViewShot ref={imageRef} options={{ format: "png", quality: 1 }}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: color }]}>
          <Text style={[styles.cardTitle, { fontFamily: font }]}>¡Feliz día de San Valentín!</Text>
          <View style={styles.cardImage}>
            <ImageBackground source={image} style={styles.box} imageStyle={styles.imageStyle} />
          </View>
          <Text style={[styles.customText, { fontFamily: font }]}>{customText}</Text>
        </View>
      </View>
      </ViewShot>

      <View style={styles.socialButton}>
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={42} color="#000" height={42} marginRight={10} onPress={handleShare}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Ionicons name="camera-outline" size={42} color="#000" height={42} marginRight={10} onPress={onSaveImageAsync}/>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height: '150%',}}>
      <Text style={styles.h3}>Tipo de Fuente</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width: '120%',}}>
        <View style={styles.fontContainer}>
          {["normal", "cursive", "typewriter", "fancy"].map((fnt) => (
            <TouchableOpacity key={fnt} style={styles.fontButton} onPress={() => setFont(fnt)}>
              <Text style={{ fontFamily: fnt }}>{fnt}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        <Text style={styles.h3}>Color</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width: '120%',}}>
        <View style={styles.colorContainer}>
          {["#f08080", "#a4c3b2", "#ffd6ff", "#f2cc8f", "#83c5be", "#c8b6ff"].map((col) => (
            <TouchableOpacity key={col} style={[styles.button, { backgroundColor: col }]} onPress={() => setColor(col)} />
          ))}
        </View>
        </ScrollView>

        <Text style={styles.h3}>Imagen</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width: '120%',}}>
        <View style={styles.imagesContainer}>
          {[
            require("./assets/amar.png"),
            require("./assets/corazon.png"),
            require("./assets/corazon (1).png"),
            require("./assets/flor.png"),
            require("./assets/jazmin.png"),
            require("./assets/oso-de-peluche.png"),
          ].map((img, index) => (
            <TouchableOpacity key={index} style={styles.imageButton} onPress={() => setImage(img)}>
              <ImageBackground source={img} style={styles.imagePreview} />
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        
        <Text style={styles.h3}>Mensaje Personalizado</Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe tu mensaje..."
          value={customText}
          onChangeText={setCustomText}
        />
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f3ee",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "11%",
    width: "100%",
    paddingTop: '10%',
  },
  navbarText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
  navbarIcon: {
    marginHorizontal: 12,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 4,
    marginVertical: 8,
  },
  fontContainer: {
    width: '100%',
    height: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  fontButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "22%",
    marginVertical: 5, 
  },
  cardContainer: {
    height: 400,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  card: {
    height: 390,
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    width: "96%",
  },
  customText: {
    fontSize: 26,
    textAlign: "center", 
    marginBottom: 20,
    width: "96%",
  },
  cardImage: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    borderRadius: 10,
  },
  inputContainer: {
    height: "20%",
  },
  socialButton:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: 64,
    height: 80,
    borderRadius: 8,
  },
  imageButton: {
    width: 64,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  scroll:{
    height: '100%',
  },
  footerContainer: {
    flex: 10,
    paddingTop: 10,
    width: "100%",
    paddingHorizontal: '4%',
    paddingVertical: 10,
  }
  
});
