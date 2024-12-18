import { SafeAreaView, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import React, { } from "react";
// Import de l'image pour l'utiliser dans la source du composant
import macaron1 from '../assets/images/macarons.png';
import macaron2 from '../assets/images/macarons2.jpg';
import framboisier1 from '../assets/images/framboisier1.webp';
import framboisier2 from '../assets/images/framboisier2.jpg';
import opera1 from '../assets/images/opera1.jpg';
import opera2 from '../assets/images/opera2.jpg';

const windowWidth = Dimensions.get("window").width;
const ratio = 1.5;
console.log(windowWidth);
const gourmandises = {
    macaron: {
      description1: "Le macaron est un petit gâteau français à l'amande, granuleux et moelleux, à la forme arrondie, d'environ 3 à 5 cm de diamètre, dérivé de la meringue.Il est fabriqué à partir d'amandes concassées, de sucre glace, de sucre et de blancs d'œufs, la quantité d'amande devant être égale à la quantité de sucre glace (ce qu'on appelle le tant pour tant).",
      description2: 'La pâte ainsi préparée est déposée sur une plaque de four et cuite. Ceci lui donne sa forme particulière d\'une pâte figée et dorée à la cuisson. Le macaron est ensuite fourré avec une ganache dont les goûts peuvent différer.',
      description3: 'C\'est une spécialité culinaire de plusieurs villes et régions françaises, et dont la recette et l\'aspect varient selon les endroits.Le macaron ne doit pas être confondu avec les confiseries à base de pâte d\'amande appelées massepain, ni avec le congolais à base de chair de noix de coco râpé.',
      image1: macaron1,
      image2: macaron2
    },
    framboisier: {
      description1: "Le framboisier est un dessert classique de la pâtisserie française. Il est composé de plusieurs couches de génoise qui s'intercalent dans une mousse de framboises. ",
      description2: 'C\'est un dessert riche et aromatique qui combine les saveurs douces de la génoise et de la crème pâtissière avec l’acidité fraîche des framboises.',
      description3: 'On décore le framboisier de framboises fraîches, de chantilly et quelques fruits secs pour le côté croustillant. Le framboisier est un dessert élégant, léger et fruité qui est apprécié par les amateurs de douceurs fruitées et raffinées.',
      image1: framboisier1,
      image2: framboisier2,
    },
    opera: {
      description1: "Le Gâteau Opéra est un entremet traditionnel de pâtisserie française, caractérisé par ses couches successives de biscuit Joconde imbibé de sirop de café, crème au beurre au café, et ganache au chocolat.",
      description2: 'Le Gâteau Opéra a été créé pour la première fois dans les années 1950 par la pâtisserie parisienne Dalloyau pour ravir les spectateurs de l\'opéra de Paris avec un dessert luxueux qui se distingue tant par son goût que par sa présentation.',
      description3: ' Les six couches du gâteau représentent les six actes d\'un opéra classique et symbolisent la complexité et l\'élégance de l\'art lyrique. La couche finale de glaçage au chocolat représente le point culminant, tout comme la conclusion d\'une grande pièce musicale. ',
      image1: opera1,
      image2: opera2,
    },
  };

export default function MacaronDetail({route}) {
    const { name } = route.params;
    const gourmandise = gourmandises[name];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.blocTitre}>
                {name}
            </Text>
            <ScrollView style={styles.scrollView}>
                <Image source={gourmandise.image1} style={styles.image} />
                <Text style={styles.paragraphe}>
                    {gourmandise.description1}
                </Text>
                <Text style={styles.paragraphe}>
                    {gourmandise.description2}
                </Text>
                <Image source={gourmandise.image2} style={styles.image} />
                <Text style={styles.paragraphe}>
                    {gourmandise.description3}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#660000",
        paddingHorizontal: 10,
    },
    blocTitre: {
        fontFamily: 'PTSerifItalic',
        fontSize: 40,
        color: "white",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15
    },
    image: {
        width: windowWidth - 40,
        height: windowWidth / ratio,
    },
    scrollView: {
        paddingTop: 10,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    paragraphe: {
        fontFamily: 'QuicksandLight',
        fontSize: 20,
        paddingBottom: 5,
        paddingTop: 5,
        color: "white",
    },
});
