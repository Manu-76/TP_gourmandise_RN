// 1- Créer ses imports connus
import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import intro from '../assets/images/intro.jpg';

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titre}>
                Les desserts gourmands
            </Text>
            <Image
                source={intro}
                style={styles.image}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Second")}
            >
                <Text style={styles.styleButton}>
                    Entrer
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
//3- Mise en place des styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AD1A44",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: '90%',
        height: '40%',
        borderRadius: 30,
        marginTop: 20,
    },
    titre: {
        fontFamily: 'CookieRegular',
        color: "white",
        fontSize: 45,
    },
    button: {
        backgroundColor: "#5C1029",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width: 150,
        padding: 10,
        alignItems: 'center',

    },
    styleButton: {
        color: "white",
        fontSize: 20,
    }

});
