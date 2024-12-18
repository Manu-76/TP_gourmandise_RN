import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import icone from '../assets/images/logo.png';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={icone} style={styles.image}></Image>
            <Text style={styles.text}>Les desserts gourmands</Text>
        </View>
    );
}
//
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    text: {
        fontFamily: "CookieRegular",
        fontSize: 30,
    }
});