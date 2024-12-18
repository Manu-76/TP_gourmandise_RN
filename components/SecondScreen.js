import { SafeAreaView, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import React from "react";
// Import des images pour les utiliser dans la source du composant
import macaron from '../assets/images/macaron.jpg';
import framboisier from '../assets/images/framboisier.jpg';
import opera from '../assets/images/opera.jpg';
//  Récupération de la largeur de l'écran
const imageHeight = Dimensions.get("window").height / 6;
const ratio = 1.3;
// 
export default function SecondScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.ligne} onPress={() => navigation.navigate("MacaronDetail", { name: 'macaron' } )}>
                <Image source={macaron} style={styles.image}></Image>
                <Text style={styles.text}>Macaron</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ligne} onPress={() => navigation.navigate("MacaronDetail", { name: 'framboisier' })}>
                <Image source={framboisier} style={styles.image}></Image>
                <Text style={styles.text}>Framboisier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ligne} onPress={() => navigation.navigate("MacaronDetail", { name: 'opera' })}>
                <Image source={opera} style={styles.image}></Image>
                <Text style={styles.text}>Opéra</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
// Déclaration des styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#660000",
    },
    ligne: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 30
    },
    text: {
        fontFamily: 'CookieRegular',
        fontSize: 40,
        color: 'white',
        marginLeft: 40
    },
    image: {
        borderRadius: imageHeight / 2,
        width: imageHeight,
        height: imageHeight,

    },
    button: {
        color: 'white'
    }
});