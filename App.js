// 0- Import de base
import React from 'react';
// 5- Mise en place du navigator
import MainStackNavigator from './navigation/MainStackNavigator';
// 1- Prise en charge des typos en assets
import { useFonts } from 'expo-font';
// 4- Si on veut voir le rendu d'une nouvelle page on importe cette page ici (momentanée)
// 4- Import HomeScreen from './src/components/HomeScreen';
// 4- Ne pas oublier le return <HomeScreen></HomeScreen> -> expo-start pour visualiser

export default function App() {
  // 2- Chargement des typos pour les rendre dispo dans l'appli
  const [loaded] = useFonts({
    // 3- On peut donner le nom que l'on veut à la clef CookieRegular ou Cookie, le tt c'est d'employer ce meme nom dans les composants
    CookieRegular: require("./assets/fonts/Cookie-Regular.ttf"),
    PTSerifItalic: require("./assets/fonts/PTSerif-Italic.ttf"),
    QuicksandLight: require('./assets/fonts/Quicksand-Light.ttf')
  });

  // 2.1
  if (!loaded) { return null; }
  return (
    // 5.1
    <MainStackNavigator></MainStackNavigator>
  );
}
